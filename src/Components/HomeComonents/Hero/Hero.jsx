import Slider from "react-slick";
import Button from "../../Shared/Button/Button";
import Img1 from "../../../assets/hero/yellow-drill-1.png";
import bg1 from "../../../assets/hero/bg1.png";
import Img2 from "../../../assets/hero/yellow-tools-kit-1.png";
import bg2 from "../../../assets/hero/bg2.png";
import Img3 from "../../../assets/hero/yellow-chainsaw1.png";

const Hero = () => {
  const HeroData = [
    {
      id: 1,
      bg: bg1,
      img: Img1,
      subtitle: "Order Now and Get",
      title: "20% off on",
      title2: "Drill Machine",
    },
    {
      id: 2,
      bg: bg2,
      img: Img2,
      subtitle: "Order Today and Get",
      title: "22% off on",
      title2: "Tools Kit",
    },
    {
      id: 3,
      img: Img3,
      bg: bg2,
      subtitle: "Get This Week",
      title: "25% off on",
      title2: "Chainsaw",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container mx-auto mt-2 mb-7 drop-shadow rounded-3xl">
      <Slider {...settings}>
        {HeroData.map((data) => (
          <div key={data.id}>
            {/* Hero section */}
            <div
              className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center"
              style={{
                backgroundImage: `url(${data.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "1.5rem",
              }}
            >
              <div className="container sm:pb-0 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
                  {/* text content section */}
                  <div className="flex flex-col w-screen justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl min-w-full uppercase text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-brandYellow/90 to-[#fff]/90 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text="Shop By Category"
                        bgColor="bg-brandYellow/90"
                        textColor="text-black"
                      />
                    </div>
                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_◎□ rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
