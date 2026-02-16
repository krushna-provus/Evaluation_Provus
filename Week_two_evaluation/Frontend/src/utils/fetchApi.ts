import ApiError from "../classes/ApiError";

async function fetchApi<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new ApiError(response.status);
    }

    return await response.json() as T;

  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network error. Please check your connection.");
    }

    if (error instanceof ApiError) {
      throw error;
    }

    throw new Error("Unexpected error occurred.");
  }
}

export default fetchApi;
