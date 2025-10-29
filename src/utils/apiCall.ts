/* eslint-disable @typescript-eslint/no-explicit-any */

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const apiCaller = async <T>(
  url: string,
  method: HttpMethod,
  body?: Record<string, any>,
  customHeaders?: Record<string, string>
): Promise<T> => {
  const response = await fetch("https://ease-my-itinerary-703138722646.us-central1.run.app" + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...customHeaders,
    },
    body: body ? JSON.stringify(body) : undefined,
  });



  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred.',
    }));
    throw new Error(
      `API Error: ${response.status} ${response.statusText} - ${errorData.message || ''}`
    );
  }

  if (response.status === 204) {
    return null as T;
  }

  return response.json() as Promise<T>;
};

export const streamApiCaller = async (
  url: string,
  method: HttpMethod,
  body?: Record<string, any>,
  customHeaders?: Record<string, string>,
  onStreamData?: (chunk: string) => void
): Promise<void> => {
  const response = await fetch("https://ease-my-itinerary-703138722646.us-central1.run.app" + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...customHeaders,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      message: 'An unknown error occurred.',
    }));
    throw new Error(
      `API Error: ${response.status} ${response.statusText} - ${errorData.message || ''}`
    );
  }

  if (!response.body) {
    throw new Error('Response body is null or undefined.');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let result = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const chunk = decoder.decode(value, { stream: true });
    result += chunk;
    if (onStreamData) {
      onStreamData(chunk);
    }
  }
};