import React from "react";
import { useForm } from "react-hook-form";

const fields = [
  { name: "meanTemp", label: "Mean Temperature", unit: "°C" },
  { name: "maxTemp", label: "Max Temperature", unit: "°C" },
  { name: "minTemp", label: "Min Temperature", unit: "°C" },
  { name: "humidity", label: "Humidity", unit: "%" },
  { name: "windSpeed", label: "Wind Speed", unit: "m/s" },
  { name: "pressure", label: "Pressure", unit: "kPa" },
  { name: "radiation", label: "Net Radiation", unit: "MJ/m²/day" },
];

export default function IrrigationPredictor() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const result = await response.json();
      alert(`Predicted Irrigation: ${result.irrigation} mm`);
      reset();
    } catch (error) {
      console.error(error);
      alert("Prediction failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center -mt-8">
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-3xl rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
          Predict Required Irrigation
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1">
                {field.label}
              </label>
              <input
                type="number"
                step="any"
                placeholder={`Enter ${field.label.toLowerCase()} (${field.unit})`}
                {...register(field.name, {
                  required: `${field.label} is required`,
                })}
                className={`px-4 py-2 rounded-xl bg-white/60 backdrop-blur-sm border 
                            ${errors[field.name] ? "border-red-500 focus:ring-red-400" : "border-white/50 focus:ring-green-300"} 
                            focus:outline-none focus:ring-2 transition`}
              />
              {errors[field.name] && (
                <span className="text-red-600 text-sm mt-1">
                  {errors[field.name].message}
                </span>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full font-semibold text-green-900 
                         bg-white/30 backdrop-blur-md border border-white/50 
                         hover:bg-white/40 transition shadow-lg cursor-pointer"
            >
              Predict Irrigation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
