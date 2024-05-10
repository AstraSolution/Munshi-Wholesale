import ContactUsForm from "../../Components/ContactUsComponents/Forms/ContactUsForm";
import UKContact from "../../Components/ContactUsComponents/UKOffice/UKContact";
import USAContact from "../../Components/ContactUsComponents/USAOffice/USAContact";


const ContactUs = () => {
    return (
        <div className="duration-300">
            <USAContact />
            <UKContact />
            <ContactUsForm />
        </div>
    );
};

export default ContactUs;