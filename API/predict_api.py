from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://agro-pal-git-main-aman-gours-projects-f999180d.vercel.app"],  # For testing: allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ScoringItem(BaseModel):
    meanTemp: float
    maxTemp: float
    minTemp: float
    humidity: float
    windSpeed: float
    pressure: float
    radiation: float


# load your model (pipeline)
model = joblib.load("model.pkl")

@app.post("/predict")
async def scoring_endpoint(item: ScoringItem):
    df = pd.DataFrame([item.dict()])
    yhat = model.predict(df)
    return {"irrigation": float(yhat[0])}
