import  { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const WishList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const wishlistItems = [
    {
      name: "Divi Engine Logo Zipper Hoodie",
      price: 29.99,
      stockStatus: "In Stock",
      image:
        "https://es.digitaltrends.com/wp-content/uploads/2023/11/mejor-cable-ethernet-1.jpeg?fit=1500%2C1000&p=1",
    },
    {
      name: "Dat Divi Engine Life Crop-top 13-Tonel",
      price: 14.99,
      stockStatus: "In Stock",
      image:
        "https://es.digitaltrends.com/wp-content/uploads/2023/11/mejor-cable-ethernet-1.jpeg?fit=1500%2C1000&p=1",
    },
    {
      name: "Dat Divi Engine Life Hoodie Limited Edition",
      price: 44.99,
      stockStatus: "In Stock",
      image:
        "https://es.digitaltrends.com/wp-content/uploads/2023/11/mejor-cable-ethernet-1.jpeg?fit=1500%2C1000&p=1",
    },
    {
      name: "WordPress Tee",
      price: 12.99,
      stockStatus: "In Stock",
      image:
        "https://es.digitaltrends.com/wp-content/uploads/2023/11/mejor-cable-ethernet-1.jpeg?fit=1500%2C1000&p=1",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-16  ">
        <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>
        <table className="w-full table-auto shadow-md rounded-md overflow-hidden border border-gray-500">
          <thead className="text-center">
            <tr className="bg-gray-200 font-semibold text-center text-xl  ">
              <th className="py-4 px-6 border border-gray-500 text-center"></th>
              <th className="py-4 px-6 border border-gray-500">
                Product Image
              </th>
              <th className="py-4 px-6 border border-gray-500 text-center">
                Product name
              </th>
              <th className="py-4 px-6 border border-gray-500 text-center">
                Unit price
              </th>
              <th className="py-4 px-6 border border-gray-500 text-center">
                Stock status
              </th>
              <th className="py-4 px-6 border border-gray-500 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems?.map((item, i) => (
              <tr
                key={i}
                className="border-b border-gray-500 hover:bg-gray-100"
              >
                <td className="py-4 px-6 text-center whitespace-nowrap border border-gray-500 text-2xl text-red-600 ">
                  x
                </td>
                <td className="py-4 px-6 text-left whitespace-nowrap border border-gray-500">
                  <img
                    src={item?.image}
                    alt=""
                    className="h-20 w-20 mx-auto rounded-md"
                  />
                </td>
                <td className="py-4 px-6 text-left whitespace-nowrap border border-gray-500">
                  {item?.name}
                </td>
                <td className="py-4 px-6 text-center whitespace-nowrap border border-gray-500">
                  ${item?.price}
                </td>
                <td className="py-4 px-6 text-center border border-gray-500">
                  {item?.stockStatus}
                </td>
                <td className="py-4 px-6 text-center border border-gray-500">
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
                    Add to cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
