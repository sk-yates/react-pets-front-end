const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;
console.log("BASE_URL:", BASE_URL);


const index = async () => {
    try {
    const res = await fetch(BASE_URL);
    console.log("Res:", res);
    
    return res.json();
    
    } catch (error) {
        console.log("index error:", error);
    }
};

const create = async (formData) => {
    try {
      const res = await fetch(BASE_URL, {
        // We specify that this is a 'POST' request
        method: 'POST',
        // We're sending JSON data, so we attach a Content-Type header
        // and specify that the data being sent is type 'application/json'
        headers: {
          'Content-Type': 'application/json',
        },
        // The formData, converted to JSON, is sent as the body
        // This will be received on the backend as req.body
        body: JSON.stringify(formData),
      });
      return res.json();
    } catch (err) {
      console.log("createPet error:", err);
    }
  };

const updatePet = async (formData, petId) => {
  try {
    const res = await fetch(`${BASE_URL}/${petId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log("updatePet error:", err)
  }
};

const deletePet = async (petId) => {
  try {
    const deletedPet = await fetch(`${BASE_URL}/${petId}`, {
      method: 'DELETE', 
    });
    return deletedPet.json();
  } catch (err) {
    console.log("deletePet error:", err)
  }
};

export { index, create, updatePet, deletePet };