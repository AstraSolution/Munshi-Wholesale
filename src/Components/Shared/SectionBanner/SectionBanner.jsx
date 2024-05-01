import PropTypes from "prop-types";

const SectionBanner = ({ title }) => {
  return (
    <div className="mt-28">
      <div
        className="h-[220px] py-14 pl-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #000000c1, #000000ad), url('https://i.ibb.co/s5Rz4gL/bread-4bfab4cb-9c4a-4da3-8220-e5ce979da114.jpg')",
          backgroundPosition: "top center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-5xl font-semibold mb-4">{title}</h2>
        <h3 className="text-xl">All / Corded Electric Circular Saw</h3>
      </div>
    </div>
  );
};

export default SectionBanner;

SectionBanner.propTypes = {
  title: PropTypes.string,
};
