// AddHospitalForm.tsx
"use client";
import addHospital from "@/libs/addHospital";
import React, { useState } from "react";

const AddHospitalForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "",
    province: "",
    postalcode: "",
    tel: "",
    picture: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    await addHospital(formData);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "350px",
        gap: "15px",
      }}
      onSubmit={handleSubmit}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <label htmlFor="address">Address:</label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <label htmlFor="district">District:</label>
        <input
          id="district"
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <label htmlFor="province">Province:</label>
        <input
          id="province"
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <label htmlFor="postalcode">Postal Code:</label>
        <input
          id="postalcode"
          type="text"
          name="postalcode"
          value={formData.postalcode}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <label htmlFor="tel">Telephone:</label>
        <input
          id="tel"
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <label htmlFor="picture">Picture URL:</label>
        <input
          id="picture"
          type="text"
          name="picture"
          value={formData.picture}
          onChange={handleChange}
        />
      </div>
      <br />
      <button
        className="mt-4 py-2 px-5 bg-blue-600 text-white rounded border border-blue-700 hover:bg-blue-700"
        type="submit"
      >
        Add Hospital
      </button>
    </form>
  );
};

export default AddHospitalForm;
