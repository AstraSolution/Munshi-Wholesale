import PropTypes from "prop-types";

const OfferCard = ({ image, title, offerTitle, offer }) => {
  return (
    <div
      className="rounded-lg shadow-[-5px_0px_20px_5px_rgba(0,0,0,0.3)] relative h-[400px] p-8"
      style={{
        backgroundImage: `url(${image})`,
        backgroundOrigin: "border-box",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
      }}
    >
      <div className="float-right bg-[#ffffff9e] hover:shadow-md h-full p-7 rounded-lg">
        <pre className="text-3xl font-semibold float-right montserrat uppercase">
          {title.replace(" ", "\n")}
        </pre>

        <div className="absolute bottom-10 right-10">
          <h3 className="text-red-400 text-lg font-medium montserrat">
            {offerTitle}
          </h3>
          <h3 className="text-3xl font-bold montserrat">{offer}</h3>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

OfferCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  offerTitle: PropTypes.string,
  offer: PropTypes.string,
};
