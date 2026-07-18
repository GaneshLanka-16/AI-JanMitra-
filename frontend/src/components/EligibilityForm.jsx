import React from "react";

export default function EligibilityForm({
  formData,
  setFormData,
  onSubmit,
}) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Check Your Eligibility
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Age */}
        <div>
          <label className="block mb-2 font-semibold">
            Age
          </label>

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Age"
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-2 font-semibold">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* State */}
        <div>
          <label className="block mb-2 font-semibold">
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="block mb-2 font-semibold">
            Occupation
          </label>

          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Farmer / Student / Worker"
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Income */}
        <div>
          <label className="block mb-2 font-semibold">
            Annual Income (₹)
          </label>

          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            placeholder="Enter Annual Income"
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-semibold">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
            <option>EWS</option>
          </select>
        </div>

      </div>

      <button
        onClick={onSubmit}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition"
      >
        🔍 Check Eligibility with AI
      </button>

    </div>
  );
}