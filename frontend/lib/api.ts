export async function api(
  path: string,
  method = "GET",
  body?: any,
  token?: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body ? JSON.stringify(body) : undefined,
    }
  );

  if (!res.ok) throw new Error("API Error");
  return res.json();
}
