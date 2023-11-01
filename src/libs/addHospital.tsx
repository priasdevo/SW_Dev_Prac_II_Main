"use server";
import { connectDB } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";

export default async function addHospital(formData: any) {
  const { name, address, district, province, postalcode, tel, picture } =
    formData;
  try {
    await connectDB();
    const hospital = await Hospital.create({
      name,
      address,
      district,
      province,
      postalcode,
      tel,
      picture,
    });
    revalidateTag("hospitals");
  } catch (err) {
    console.log(err);
  }
}
