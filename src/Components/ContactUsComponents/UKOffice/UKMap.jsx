
const UKMap = () => {
    return (
        <div className="rounded-lg overflow-hidden px-1">
            <div>
                <div className="container mx-auto relative h-0 overflow-hidden mb-6 pb-[400px] lg:pb-[600px]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-[500px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.434334305313!2d-0.0935577!3d51.5306494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca754afa735%3A0xe0be1fc2368705a3!2s20-22%20Wenlock%20Rd%2C%20London%20N1%207GU%2C%20UK!5e0!3m2!1sen!2sus!4v1610035984427!5m2!1sen!2sus"
                        frameBorder="0"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>

                </div>
            </div>
        </div>
    );
};

export default UKMap;