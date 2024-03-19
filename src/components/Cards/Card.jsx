
import "./card.css";

const Card = () => {
  return (
    <div className="center">
      <div className="container-card">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.ibb.co/1vh8BKh/mpplay17a-removebg-preview.png" alt="Nike Shoes" />
          </div>
          <div className="contentBx">
            <h2 className='text-white'>Screw</h2>
            <div className="flex justify-evenly">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
         
    </div>
  );
};

export default Card;
