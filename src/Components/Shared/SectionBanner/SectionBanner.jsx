import PropTypes from "prop-types";

const SectionBanner = ({ title, subTitle }) => {
  return (
    <div className="">
      <div
        className="h-[120px] lg:h-[220px] py-5 lg:py-14 pl-10 md:pl-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000000c9, #000000a1), url('https://i.ibb.co/s5Rz4gL/bread-4bfab4cb-9c4a-4da3-8220-e5ce979da114.jpg')",
          backgroundPosition: "top center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-lg md:text-3xl lg:text-5xl font-semibold mb-4">
          {title}
        </h2>
        <h3 className="text-base lg:text-xl">{subTitle}</h3>
      </div>
    </div>
  );
};

export default SectionBanner;

SectionBanner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
