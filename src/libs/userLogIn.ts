export default async function userLogIn(email: string, password: string) {
  const response = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to log-in");
  }
  return await response.json();
}
