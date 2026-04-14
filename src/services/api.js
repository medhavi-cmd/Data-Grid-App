import axios from "axios";  

const API = "https://fakestoreapi.com/products";

async function getProducts() {
  try {
    const response = await axios.get(API);
    return response.data;
  } 
  catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export { getProducts };