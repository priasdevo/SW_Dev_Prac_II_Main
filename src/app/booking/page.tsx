import { Input } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import CustomDatePicker from "@/components/CustomDatePicker";

export default function Booking() {
  return (
    <main className="flex flex-col justify-content items-center p-24 pt-0 min-h-screen">
      <div className="text-xl font-medium">New Booking</div>
      <br />
      <div className="w-fit space-y-3">
        <div className="text-md text-left text-grey-600">Name</div>
        <div className="w-[100%] rounded-lg space-x-5 space-y-2">
          <Input placeholder="name" className="bg-white px-3" />
          <Input placeholder="surname" className="bg-white px-3" />
        </div>
        <div className="text-md text-left text-gray-600">ID card number</div>
        <div className="w-[100%] rounded-lg space-x-5 space-y-2">
          <Input placeholder="id card number" className="bg-white px-3" />
        </div>
        <div className="text-md text-left text-gray-600">Location</div>
        <div className="w-[100%] rounded-lg space-x-5 space-y-2">
          <Select
            variant="standard"
            name="location"
            className="bg-white h-[50px] w-[250px] px-3"
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
        <CustomDatePicker />
      </div>
    </main>
  );
}
