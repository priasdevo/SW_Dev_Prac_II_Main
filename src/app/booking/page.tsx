import { Input } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import CustomDatePicker from "@/components/CustomDatePicker";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  let createdAt = new Date(profile.data.createdAt);

  return (
    <main className="flex flex-col justify-content items-center p-24 pt-0 min-h-screen">
      <div className="bg-white rounded-xl w-fit flex flex-col shadow-xl p-4 m-5">
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <p>Name : </p>
          <p className="font-bold">{profile.data.name}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <p>Email : </p>
          <p className="font-bold">{profile.data.email}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <p>Tel. : </p>
          <p className="font-bold">{profile.data.tel}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <p>Member Since : </p>
          <p className="font-bold">{createdAt.toLocaleDateString()}</p>
        </div>
      </div>
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
