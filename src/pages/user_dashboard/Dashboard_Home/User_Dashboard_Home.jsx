import Order_Bar_Chart from "./Order_Bar_Chart";
import Header from "./Header";
import Payment_History from "./Payment_History";

const User_Dashboard_Home = () => {
  return (
    <div className=" mx-auto px-1 text-gray-600">
      <Header></Header>
      <Payment_History></Payment_History>
      <div className="">
        <Order_Bar_Chart></Order_Bar_Chart>
      </div>
    </div>
  );
};

export default User_Dashboard_Home;
