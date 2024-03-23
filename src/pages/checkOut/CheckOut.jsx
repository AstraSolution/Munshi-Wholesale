const CheckOut = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen p-5 ">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* left side */}
        <div className="lg:w-2/3 space-y-5">
          {/* Personal Information start */}
          <div className="border border-black shadow-md rounded-sm">
            <div className="bg-black rounded-t-sm p-2">
              <h1 className="text-white font-bold">Personal Information</h1>
            </div>
            <form className="w-full flex flex-col gap-4 p-5">
              <div className="flex items-center">
                <span className="mr-2">Social title</span>
                <select
                  id="title"
                  name="title"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-4 text-sm"
                  >
                    Show
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="birthDate" className="mb-2">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                />
              </div>
            </form>
          </div>
          {/* Personal Information end */}
        </div>

        {/* right side */}
        <div className="lg:w-1/3 space-y-5"></div>
      </div>
    </div>
  );
};

export default CheckOut;
