import newsbg from "../../assets/images/newsbg.png";

const Newslatter = () => {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${newsbg})` }}
    >
      <div className="w-full flex items-start container mx-auto">
        <div className="w-full m-4">
          <h3 className="text-2xl font-bold mx-4 mb-2">
            Sign Up For Our Newsletter
          </h3>
          <form className="my-4 flex w-full">
            <input
              className="w-1/3 rounded-l-full p-4 border-t border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Enter your email address"
            />
            <button className="-ml-10 px-8 rounded-full bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
