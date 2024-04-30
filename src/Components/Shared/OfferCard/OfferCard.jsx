import PropTypes from "prop-types";

const OfferCard = ({ image, title, offerTitle, offer }) => {
  return (
    <div
      className="rounded-lg shadow-[-5px_0px_20px_5px_rgba(0,0,0,0.3)] relative h-[400px] p-8"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
      }}
    >
      <div className="ml-20 p-5 bg-[#ffffff48] hover:bg-[#ffffff97] hover:shadow-lg h-full rounded-lg">
        <pre className="text-3xl font-semibold montserrat uppercase">
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
