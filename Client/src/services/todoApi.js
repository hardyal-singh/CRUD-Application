// todoApi.js

const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/api/v1/todo`; // Replace this with your API base URL

const handleResponse = (response) => {
  if (response) {
    return response.json();
  }
  throw new Error('Network response was not ok.');
};

const todoApi = {
getTodos:async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
},
  addTodo: async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  deleteTodo: async (endpoint, data) => {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
  // Add more methods like put, delete as needed
};

export default todoApi;
