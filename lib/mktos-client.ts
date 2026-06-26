export async function fetchMktOS(
  endpoint: string,
  token: string,
  options?: RequestInit
): Promise<Response> {
  const base = process.env.MKTOS_APP_URL || "https://mktos360.app";
  return fetch(`${base}/api/client${endpoint}`, {
    ...options,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });
}
