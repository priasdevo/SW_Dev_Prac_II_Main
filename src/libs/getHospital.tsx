export default async function getHospital(id: string) {
  const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`);
  console.log("Prias : ", id);
  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }

  return await response.json();
}
