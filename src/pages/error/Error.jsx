import React from "react";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";
import { Button } from "@material-tailwind/react";

const EmptyComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://i.ibb.co/M56D6xg/intro-section-pattern.png')]">
        <div className="flex flex-col items-center justify-center py-28">
          <div className="max-w-sm">
            <img
              src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
              className="w-[234] h-[350] mx-auto"
              alt="404"
            />
            <h1 className="text-3xl font-bold text-center text-red-500">404 Not Found</h1>
            <p className="mt-4 text-center">
              Sorry, the requested page isn't found. Perhaps a typo or a broken
              link. Redirecting back to safety.
            </p>
            <div className="mt-6 flex justify-center">
              <Button color="amber" className="text-white">Go Home</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmptyComponent;
