// RaiseQuery.jsx
import React from "react";
import { useForm } from "react-hook-form";

export default function QueryForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center -mt-7 p-4">
      <div className="w-full max-w-2xl bg-white/30 backdrop-blur-3xl rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
          Raise a Query
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="px-4 py-2 rounded-xl bg-white/60 border border-white/50 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="px-4 py-2 rounded-xl bg-white/60 border border-white/50 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Enter query subject"
              {...register("subject", { required: true })}
              className="px-4 py-2 rounded-xl bg-white/60 border border-white/50 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-800 font-medium mb-1">
              Query Details
            </label>
            <textarea
              placeholder="Write your query here..."
              {...register("message", { required: true })}
              rows={4}
              className="px-4 py-2 rounded-xl bg-white/60 border border-white/50 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
          <button
              type="submit"
              className="w-full px-6 py-3 rounded-full font-semibold text-green-900 
                      bg-white/30 backdrop-blur-md border border-white/50 
                      hover:bg-white/40 transition shadow-lg cursor-pointer"
          >
              Submit Query
          </button>
          </div>

        </form>
      </div>
    </div>
  );
}
