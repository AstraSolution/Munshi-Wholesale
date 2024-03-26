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

  
  // // handel add to cart function
  // const handleAddToCart = async (id) => {
  //   const images = product?.image || [];
  //   const color = product?.color || [];
  //   const cartData = {
  //     customer_name: user?.displayName || "",
  //     customer_email: user?.email || "",
  //     product_id: id,
  //     unit_price: product?.price,
  //     total_price: product?.price,
  //     quantity: 1,
  //     product_image: [...images],
  //     stock_limit: product?.quantity,
  //     title: product?.title,
  //     color: [...color],
  //     dimensions: product?.dimensions
  //   };

  //    // Check if the product is already in the Cart
  //    let productExistsInCarts = false;
  //    const carts = JSON.parse(localStorage.getItem("carts")) || [];
  //    for (const item of carts) {
  //      if (item.product_id === id) {
  //        productExistsInCarts = true;
  //        break;
  //      }
  //    }

  //    if (productExistsInCarts) {
  //      toast.error(`${product?.title} is already in your Carts`);
  //      return; // Stop execution if the product already exists
  //    }

  //   if (!user) {
  //     carts.push(cartData);
  //     localStorage.setItem("carts", JSON.stringify(carts));

  //     toast.success(`${product?.title} Added to cart`);
  //   } else {
  //     const res = await axiosPublic.post("/myCarts", cartData);
  //     refetch()
  //     setTimeout(() => {
  //       toast.success(`${product?.title} Added to cart`);
  //     }, 1000);
  //     console.log(res?.data);
  //   }
  // };


  const functions = {
    handleAddToCarts,
  };

  return <FuncContext.Provider value={functions}>{children}</FuncContext.Provider>;
};

export default FunctionProvider;
