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

          {/* Addresses start */}
          <div className="border border-black shadow-md rounded-sm">
            <div className="bg-black rounded-t-sm p-2">
              <h1 className="text-white font-bold">Addresses</h1>
            </div>
            <form className="w-full rounded-lg p-4 flex flex-col gap-4">
              <div>
                <label htmlFor="company" className="mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                />
              </div>
              <div>
                <label htmlFor="vatNumber" className="mb-2">
                  VAT number (Optional)
                </label>
                <input
                  type="text"
                  id="vatNumber"
                  name="vatNumber"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                />
              </div>
              <div>
                <label htmlFor="address" className="mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label htmlFor="addressComplement" className="mb-2">
                  Address Complement (Optional)
                </label>
                <input
                  type="text"
                  id="addressComplement"
                  name="addressComplement"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                />
              </div>
              <div>
                <label htmlFor="city" className="mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full px-2 mr-2">
                  <label htmlFor="postalCode" className="mb-2">
                    Postal code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                  />
                </div>
                <div className="w-full px-2">
                  <label htmlFor="country" className="mb-2">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                  >
                    <option value="">Select Country</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none w-full"
                />
              </div>
            </form>
          </div>
          {/* Addresses end */}
        </div>

        {/* right side */}
        <div className="lg:w-1/3 space-y-5">
          {/* Order Summary start */}
          <div className="border border-black shadow-md rounded-sm">
            <div className="bg-black rounded-t-sm p-2">
              <h1 className="text-white font-bold">Order Summary</h1>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>Stepladder tool</span>
                  <span>x1</span>
                  <span>$13.93</span>
                </div>
                <div className="flex justify-between">
                  <span>Diagonal pliers</span>
                  <span>x1</span>
                  <span>$13.57</span>
                </div>
              </div>
              <div className="flex justify-between text-sm font-medium pt-2 border-t border-gray-200">
                <span>Subtotal</span>
                <span>$27.50</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                <span>Total (tax incl.)</span>
                <span>$27.50</span>
              </div>
            </div>
          </div>
          {/* Order Summary end */}

          {/* Shipping Method start */}
          <div className="border border-black shadow-md rounded-sm">
            <div className="bg-black rounded-t-sm p-2">
              <h1 className="text-white font-bold">Shipping Method</h1>
            </div>
            <div className="p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between hover:bg-gray-200 px-2 py-2 rounded-md cursor-pointer">
                  <span className="flex items-center gap-2">
                    <span>Pick up in-store</span>
                  </span>
                  <span className="text-sm font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between hover:bg-gray-200 px-2 py-2 rounded-md cursor-pointer">
                  <span className="flex items-center gap-2">
                    <span>My carrier</span>
                  </span>
                  <span className="text-sm font-medium">$8.40 (tax incl.)</span>
                </div>
              </div>
              <div className="text-center text-gray-500 text-sm">
                Estimated delivery time will be displayed at checkout
              </div>
            </div>
          </div>
          {/* Shipping Method end */}

          {/* Payment start */}
          <div className="border border-black shadow-md rounded-sm">
            <div className="bg-black rounded-t-sm p-2">
              <h1 className="text-white font-bold">Payment</h1>
            </div>
            <div className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between mb-2">
                  <span>Pay by Cash</span>
                  <input
                    type="radio"
                    id="payByCash"
                    name="paymentType"
                    value="cash"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Pay by SSLCOMMERZ</span>
                  <input
                    type="radio"
                    id="payByBankWire"
                    name="paymentType"
                    value="bankWire"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="terms" className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="mr-2"
                    />
                    <span className="text-sm">
                      I agree to the terms of service and will adhere to them
                      unconditionally.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Payment end */}




        </div>
      </div>
    </div>
  );
};

export default CheckOut;
