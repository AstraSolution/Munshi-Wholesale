import "./featured.css";

const FeaturedCard = () => {
  return (
    <div className="center">
      <div className="featured-card">
        <div className="icon">
          <img
            className="h-24 w-24"
            src="https://i.ibb.co/1vh8BKh/mpplay17a-removebg-preview.png"
            alt=""
          />
        </div>
        <p className="title">Screw</p>
        <p className="text">Check all your favourites in one place.</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
