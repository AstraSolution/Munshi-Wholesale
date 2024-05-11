export default function Services() {
  const serviceItems = [
    {
      id: "1",
      title: "FREE SHIPPING",
      description: "FREE SHIPPING ON ALL US ORDER",
      images: "https://i.ibb.co/rHqtL0R/home-icon.webp",
    },
    {
      id: "2",
      title: "ONLINE SUPPORT 24/7",
      description: "SUPPORT ONLINE 24 HOURS A DAY",
      images: "https://i.ibb.co/WG1vq2c/home-icon-2.webp",
    },
    {
      id: "3",
      title: "MONEY RETURN",
      description: "BACK GUARANTEE UNDER 7 DAYS",
      images: "https://i.ibb.co/N7gGYN4/home-icon-3.webp",
    },
    {
      id: "4",
      title: "MEMBER DISCOUNT",
      description: "ON EVERY ORDER OVER $120.00",
      images: "https://i.ibb.co/Tks1NhC/home-icon-4.webp",
    },
  ];
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {serviceItems.map((item) => (
          <div
            key={item?.id}
            className="flex items-center gap-4 p-5 rounded-sm shadow-sm bg-gray-100"
          >
            <img className="w-10" src={item.images} alt="" />
            <div className="space-y-1">
              <h3 className="font-bold text-md">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
