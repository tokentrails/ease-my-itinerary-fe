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
  onStreamData?: (chunk: any) => void
): Promise<void> => {
  const response = await fetch("https://ease-my-itinerary-703138722646.us-central1.run.app" + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...customHeaders,
    },
    body: (method === 'POST' || method === 'PUT' || method === 'PATCH') && body 
          ? JSON.stringify(body) 
          : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({
      error: {
        message: 'An unknown error occurred.',
      },
    }));
    console.log(errorData, "errorData");
    
    // Send error through the callback instead of throwing
    if (onStreamData) {
      onStreamData({
        error: errorData.error || {
          message: errorData.message || 'An unknown error occurred.',
        },
      });
    }
    return;
  }

  if (!response.body) {
    throw new Error('Response body is null or undefined.');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Process complete SSE messages
      let lastIndex = 0;
      while ((lastIndex = buffer.indexOf('\n\n')) !== -1) {
        const message = buffer.substring(0, lastIndex);
        buffer = buffer.substring(lastIndex + 2);

        const dataLine = message.split('\n').find(line => line.startsWith('data:'));
        if (dataLine) {
          const jsonString = dataLine.substring(5).trim();
          try {
            const parsedData = JSON.parse(jsonString);
            if (onStreamData) {
              onStreamData(parsedData);
            }
          } catch (e) {
            console.error("Error parsing streamed JSON:", e);
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
};