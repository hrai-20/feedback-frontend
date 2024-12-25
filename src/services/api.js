const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const submitFeedback = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit feedback');
  }
  
  return response.json();
};

export const getFeedback = async (filter, sortOrder) => {
  const url = new URL(`${API_BASE_URL}/feedback`);
  if (filter) url.searchParams.append('category', filter);
  url.searchParams.append('sortBy', 'timestamp');
  url.searchParams.append('order', sortOrder);
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch feedback');
  }
  
  return response.json();
};