import messageImg1 from "../../../assets/contactUs/MessageImg1.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n73ougm",
        "template_58zam7o",
        form.current,
        "Y9qRu_eDhWpdurzLL"
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Your feedback was successfully submitted", {
          position: "center",
          duration: 1500,
        });
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("There was an error submitting your feedback", {
          position: "top-right",
          duration: 1500,
        });
      });
  };

  return (
    <div className="lg:flex items-end justify-center gap-7 mx-auto container mb-24 pt-16 lg:pt-20 bg-white px-5">
      <img
        src={messageImg1}
        alt="Munshi Wholesale Contact"
        className="h-[350px] 2xl:h-[450px] hidden lg:block"
      />
      <div>
        <h1 className="text-3xl text-[#333] font-extrabold text-center">
          Leave a message
        </h1>
        <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600"
          />
          <input
            type="email"
            placeholder="Email"
            name="from_email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600"
          />
          <input
            type="text"
            placeholder="Subject"
            name="from_subject"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-yellow-600"
          />
          <textarea
            placeholder="Message"
            rows="6"
            name="message"
            className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-yellow-600"
          ></textarea>
          <button
            type="submit"
            className="text-white bg-red-600 hover:bg-red-400 font-semibold rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactUsForm;
