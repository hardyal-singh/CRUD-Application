// userapi.js
const BASE_URL = `${import.meta.env.VITE_APP_BASE_URL}/api/v1/user`; // Replace this with your API base URL

const handleResponse = (response) => {
  if (response) {
    return response.json();
  }
  throw new Error('Network response was not ok.');
};
const userApi = {
  getCurrentUser:async(endpoint)=>{
  const response=await fetch(`${BASE_URL}/${endpoint}`,{
    method:"GET",
    credentials:"include",
    headers:{"Content-type":"application/json"}
  });
  return handleResponse(response);
  },

  login:async function(endpoint, data){
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      credentials:"include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
  signup:async function(endpoint, data){
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await handleResponse(response);
  },
  // Add more methods like put, delete as needed
};

export default userApi;
