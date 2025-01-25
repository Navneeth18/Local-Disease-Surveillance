import React, { useState } from "react";

const SymptomsAssessmentForm = () => {
  const [formData, setFormData] = useState({
    symptoms: [],
    startDate: "",
    severity: "",
    temperature: "",
    additionalNotes: "",
    medicalConditions: [],
    medications: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData((prev) => ({
          ...prev,
          [name]: [...prev[name], value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: prev[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      symptoms: [],
      startDate: "",
      severity: "",
      temperature: "",
      additionalNotes: "",
      medicalConditions: [],
      medications: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Symptoms Assessment Form</h1>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            Primary Symptoms
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Fever",
              "Cough",
              "Headache",
              "Body Pain",
              "Difficulty Breathing",
            ].map((symptom) => (
              <label key={symptom} className="flex items-center">
                <input
                  type="checkbox"
                  name="symptoms"
                  value={symptom}
                  checked={formData.symptoms.includes(symptom)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {symptom}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            When did symptoms start?
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">Severity Level</label>
          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Severity</option>
            <option value="Mild">Mild</option>
            <option value="Moderate">Moderate</option>
            <option value="Severe">Severe</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            Current Body Temperature (°F)
          </label>
          <input
            type="text"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            placeholder="98.6"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            Additional Symptoms or Notes
          </label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Please describe any other symptoms or relevant information..."
            className="w-full border rounded-lg px-3 py-2"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            Pre-existing Medical Conditions
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Diabetes",
              "Hypertension",
              "Heart Disease",
              "Respiratory Issues",
            ].map((condition) => (
              <label key={condition} className="flex items-center">
                <input
                  type="checkbox"
                  name="medicalConditions"
                  value={condition}
                  checked={formData.medicalConditions.includes(condition)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {condition}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            Current Medications (if any)
          </label>
          <input
            type="text"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            placeholder="List any medications you are currently taking"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            Clear Form
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit Symptoms
          </button>
        </div>
      </form>
    </div>
  );
};

export default SymptomsAssessmentForm;