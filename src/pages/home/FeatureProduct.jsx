import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Card from "../../components/Cards/Card";

const FeatureProduct = () => {
  const axiosPublic = useAxiosPublic();

  const { data: featured = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/home`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <Card key={product?._id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
