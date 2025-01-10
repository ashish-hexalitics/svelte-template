export async function fetchAPI<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body?: any,
  headers: Record<string, string> = { "Content-Type": "application/json" }
): Promise<{ data?: T; error?: string }> {
  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const error = await response.text();
      return { error: `Error ${response.status}: ${error}` };
    }

    const data = await response.json();
    return { data };
  } catch (err: any) {
    return { error: `Network error: ${err.message}` };
  }
}
