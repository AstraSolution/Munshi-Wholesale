import { useState } from 'react';

const FAQs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const faqs = [
        {
            category: "Ordering Process",
            questions: [
                {
                    question: "How do I place an order?",
                    answer: "To place an order, you can visit our website and browse through our catalog. Once you've found the items you need, simply add them to your cart and proceed to checkout."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept various payment methods including credit/debit cards, PayPal, bank transfers, and cash on delivery (COD)."
                },
                {
                    question: "Is there a minimum order requirement?",
                    answer: "No, there is no minimum order requirement. You can order as much or as little as you need."
                },
                {
                    question: "Can I cancel or modify my order?",
                    answer: "Yes, you can cancel or modify your order before it has been shipped. Please contact our customer service team for assistance."
                },
                {
                    question: "How can I track my order?",
                    answer: "Once your order has been dispatched, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery."
                },
                {
                    question: "What should I do if my order is damaged or incomplete?",
                    answer: "If your order arrives damaged or incomplete, please contact our customer service team immediately. We will arrange for a replacement or refund as per our return policy."
                },
                {
                    question: "Do you offer bulk discounts?",
                    answer: "Yes, we offer discounts on bulk orders. Please contact our sales team for more information."
                }
            ]
        },
        {
            category: "Product Information",
            questions: [
                {
                    question: "Do you offer warranty on your products?",
                    answer: "Yes, most of our products come with a manufacturer's warranty. The duration and terms of the warranty may vary depending on the product."
                },
                {
                    question: "Are your products genuine?",
                    answer: "Yes, we source our products directly from authorized distributors and manufacturers. We guarantee the authenticity and quality of all our products."
                },
                {
                    question: "Do you provide product specifications?",
                    answer: "Yes, detailed product specifications are available on our website for each item. If you need further information, feel free to contact our customer service team."
                },
                {
                    question: "Can I return or exchange a product?",
                    answer: "Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return it within [number] days for a refund or exchange."
                },
                {
                    question: "Do you offer installation services?",
                    answer: "Yes, we partner with professional installation services for select products. Please check the product page or contact our team for more information."
                }
            ]
        },
        {
            category: "Shipping and Delivery",
            questions: [
                {
                    question: "What are your shipping options?",
                    answer: "We offer various shipping options including standard, expedited, and express shipping. The availability of options may vary depending on your location."
                },
                {
                    question: "How long does shipping take?",
                    answer: "Shipping times depend on your location and the shipping method chosen. Typically, orders are delivered within [number] business days."
                },
                {
                    question: "Do you ship internationally?",
                    answer: "Yes, we ship to most international destinations. However, shipping fees and delivery times may vary depending on the destination."
                },
                {
                    question: "Can I track my shipment?",
                    answer: "Yes, once your order has been dispatched, you will receive a tracking number via email. You can use this tracking number to monitor the status of your shipment."
                }
            ]
        },
        {
            category: "Returns and Refunds",
            questions: [
                {
                    question: "What is your return policy?",
                    answer: "We have a [number]-day return policy. If you're not satisfied with your purchase, you can return it within [number] days for a refund or exchange."
                },
                {
                    question: "How do I initiate a return?",
                    answer: "To initiate a return, please contact our customer service team with your order details. We will provide you with instructions on how to return the item."
                },
                {
                    question: "When will I receive my refund?",
                    answer: "Refunds are processed within [number] business days after we receive the returned item. The time it takes for the refund to reflect in your account may vary depending on your payment method and bank."
                }
            ]
        },
        {
            category: "Account and Support",
            questions: [
                {
                    question: "How do I create an account?",
                    answer: "You can create an account on our website by clicking on the 'Sign Up' or 'Register' button. Follow the prompts to enter your details and create your account."
                },
                {
                    question: "I forgot my password. What should I do?",
                    answer: "If you forgot your password, you can reset it by clicking on the 'Forgot Password' link on the login page. Follow the instructions to reset your password."
                },
                {
                    question: "How can I contact customer support?",
                    answer: "You can contact our customer support team via email, phone, or live chat. Our support team is available [days and hours] to assist you with any queries or concerns."
                }
            ]
        }
    ];

    const toggleAccordion = (question) => {
        if (selectedQuestion === question) {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(true);
            setSelectedQuestion(question);
        }
    };
    
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredFaqs = selectedCategory ? (selectedCategory === 'All' ? faqs.flat() : faqs.filter(faq => faq.category === selectedCategory)) : faqs.flat();

    return (
        <div>
            <section className="bg-white">
                <div className="container px-4 md:px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">Have any Questions?</h1>

                    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                        <div className="lg:mx-12">
                            <h1 className="text-xl font-semibold text-gray-800">Table of Content</h1>
                            <div className="mt-4 space-y-4 lg:mt-8 text-lg">
                                <a href="#" className={`block text-red-600 hover:underline ${selectedCategory === 'All' ? 'font-semibold' : ''}`} onClick={() => handleCategoryClick('All')}>All</a>
                                {faqs.map((faq, index) => (
                                    <a key={index} href="#" className={`block text-red-600 hover:underline ${selectedCategory === faq.category ? 'font-semibold' : ''}`} onClick={() => handleCategoryClick(faq.category)}>{faq.category}</a>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            {filteredFaqs.map((faq, index) => (
                                <div key={index}>
                                    {faq.questions.map((question, qIndex) => (
                                        <div key={qIndex} className='border-t border-gray-300 py-7'>
                                            <button onClick={() => toggleAccordion(question.question)} className="flex items-center focus:outline-none py-1 my-1">
                                                <svg className={`flex-shrink-0 w-6 h-6 ${isOpen && selectedQuestion === question.question ? 'transform rotate-90' : ''} text-red-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                                <h1 className="mx-4 text-base md:text-xl text-gray-700 text-start">{question.question}</h1>
                                            </button>

                                            {isOpen && selectedQuestion === question.question && (
                                                <div className="flex pl-7 md:pl-0 my-7 md:mx-10">
                                                    <span className="border border-red-600"></span>
                                                    <p className="max-w-3xl text-sm md:text-lg px-4 text-gray-600">
                                                        {question.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
