const Banner = () => {
  return (
    <div>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/ns9rx96/slider-bg.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-1/2 text-white flex justify-between items-start w-full px-28">
          <div>
            <h3 className="text-red-700 text-2xl font-semibold">
              Special Offer
            </h3>
            <p className="mt-3 text-3xl font-semibold lg:text-5xl ">
              GET 25% FLAT <br /> OFFERS ON ALL <br /> TOOLS
            </p>
            <button className="bg-yellow-300 p-3 px-5 rounded-full font-bold text-black mt-10">
              Shop Now
            </button>
          </div>
          <img
            src="https://i.ibb.co/X5dpW4L/slider-quote-image.png"
            alt="discount"
            className="hidden lg:block"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row bg-black gap-5 px-5 pb-10">
        <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First card */}
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/mDWN19T/banner-3.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          >
            <div className="bg-[#ffffffc1] m-10 p-5">
              <h2 className="text-3xl font-bold">
                MODERN DESIGN <br /> TOOLS
              </h2>
              <p className="my-3 text-lg font-medium">
                Quisque sagittis purus sit amet volutpat consequat mauris nunc.
              </p>
              <button className="bg-yellow-300 p-3 px-5 rounded-full font-bold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Second card */}
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/02c75JK/banner-2.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          >
            <div className="bg-[#ffffffc1] m-10 p-5">
              <h2 className="text-3xl font-bold">
                NEW <br /> HAMMER <br /> SET
              </h2>
              <p className="my-2 text-2xl text-red-500 font-medium">
                Special Offer
              </p>
              <button className="bg-yellow-300 p-3 px-5 rounded-full font-bold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Third card */}
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/ZWQj6hH/banner-1.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          >
            <div className="bg-[#ffffffc1] m-10 p-5">
              <h2 className="text-3xl font-bold">
                CAST IRON <br /> CHAIN SAW
              </h2>
              <p className="mt-3 text-2xl text-red-500 font-medium">
                Started Price
              </p>
              <h2 className="text-3xl font-bold mb-3">$36.00</h2>
              <button className="bg-yellow-300 p-3 px-5 rounded-full font-bold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Fourth card */}
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/b7QH6Z0/banner-4.png)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
          >
            <div className="bg-[#ffffffc1] m-10 p-5 rounded-lg">
              <h2 className="text-3xl font-bold">ELETRIC WALT POWER DRILL</h2>
              <p className="my-4 text-xl font-medium">
                Porttitor lacus luctus accumsan tortor posuere ac.
              </p>
              <button className="bg-yellow-300 p-3 px-5 rounded-full font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Big image */}
        <div
          className="w-full lg:w-[40%] grid grid-cols-1"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/K59YRgQ/maso-main-98f9cc21-a6be-467c-bf66-a8173c9c15d4.png)",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "10px",
          }}
        >
          <div className="p-5">
            <h2 className="text-3xl font-bold">
              POPULAR <br /> DRILLING <br /> MACHINE
            </h2>
            <p className="my-3 text-xl text-red-500 font-medium">
              Sale Upto 15%
            </p>
            <button className="bg-yellow-300 p-3 px-5 rounded-full font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
