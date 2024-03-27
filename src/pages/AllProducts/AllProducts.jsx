import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Card from "../../components/Cards/Card";

const AllProducts = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      return res.data;
    },
  });
 
  if(isLoading){
    return <div className=" text-center">Loading...</div>
  }
   
  const products = allProducts.products;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product?._id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
