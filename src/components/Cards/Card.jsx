
import "./card.css";

const Card = () => {
  return (
    <div className="center">
      <div className="container-card">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.ibb.co/1vh8BKh/mpplay17a-removebg-preview.png" alt="Screw" />
          </div>
          <div className="contentBx">
            <h2 className='text-white text-center -mt-6'>Title: Screw</h2>
           
            <div className="flex justify-evenly mt-4">
            <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
            <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">View Details</button>
            </div>
          </div>
        </div>
      </div>
         
    </div>
  );
};

export default Card;
