import { createContext } from "react";
import useAxiosPublic from "../hooks/axios/useAxiosPublic";

export const FuncContext = createContext(null);

const FunctionProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();

  const handleAddToCarts = async (name, email) => {
    try {
      const carts = JSON.parse(localStorage.getItem("carts")) || [];

      // Modify customer name and email for each cart item
      const modifiedCarts = carts.map((cart) => ({
        ...cart,
        customer_name: name || "",
        customer_email: email || "",
      }));

      // Save modified cart items to the database
      await axiosPublic.post("/carts", modifiedCarts);
      
      // Remove carts from local storage
      localStorage.removeItem("carts");
    } catch (error) {
      console.error("Error adding carts:", error);
      // Handle error, perhaps notify user
    }
  };

  const functions = {
    handleAddToCarts,
  };

  return <FuncContext.Provider value={functions}>{children}</FuncContext.Provider>;
};

export default FunctionProvider;
