"use client";

import { Input, Select, MenuItem } from "@mui/material";
import CustomDatePicker from "./CustomDatePicker";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";

const BookingForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    id: "",
    hospital: "",
    date: "",
  });

  const handleSubmit = () => {
    dispatch(addBooking(formData));
    // Reset the form if needed
    setFormData({
      name: "",
      surname: "",
      id: "",
      hospital: "",
      date: "",
    });
  };

  return (
    <>
      <div className="text-xl font-medium">New Booking</div>
      <br />
      <div className="w-fit space-y-3">
        <div className="text-md text-left text-grey-600">Name</div>
        <div className="w-[100%] rounded-lg space-x-5 space-y-2">
          <Input
            placeholder="name"
            className="bg-white px-3"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <Input
            placeholder="surname"
            className="bg-white px-3"
            value={formData.surname}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, surname: e.target.value }))
            }
          />
        </div>
        <div className="text-md text-left text-gray-600">ID card number</div>
        <div className="w-[100%] rounded-lg space-x-5 space-y-2">
          <Input
            placeholder="id card number"
            className="bg-white px-3"
            value={formData.id}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, id: e.target.value }))
            }
          />
        </div>
        <div className="text-md text-left text-gray-600">Location</div>
        <div className="w-[100%] rounded-lg space-x-5 space-y-2">
          <Select
            variant="standard"
            name="location"
            className="bg-white h-[50px] w-[250px] px-3"
            value={formData.hospital}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, hospital: e.target.value }))
            }
          >
            <MenuItem value="Chulalongkorn Hospital">
              Chulalongkorn Hospital
            </MenuItem>
            <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
            <MenuItem value="Thammasat University Hospital">
              Thammasat University Hospital
            </MenuItem>
          </Select>
        </div>
        <div className="text-md text-left text-gray-600">Date</div>
        <CustomDatePicker
          onChange={(date) =>
            setFormData((prev) => ({
              ...prev,
              date: date.format("YYYY-MM-DD"),
            }))
          }
        />

        <button
          className="mt-4 py-2 px-5 bg-blue-600 text-white rounded border border-blue-700 hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default BookingForm;
