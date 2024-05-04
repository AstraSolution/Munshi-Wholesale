import React from "react";

const EmptyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-sm">
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
          className="w-[234] h-[350] mx-auto"
          alt="404"
        />
        <h1 className="text-3xl font-bold text-center">404 Not Found</h1>
        <p className="mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="border px-4 py-3 rounded-md shadow-sm">Go to home</button>
        </div>
      </div>
    </div>
  );
};

export default EmptyComponent;
