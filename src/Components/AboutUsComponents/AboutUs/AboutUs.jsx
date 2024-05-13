import bannerImg from '../../../assets/aboutUs/aboutUsBanner.jpg'
import au1 from '../../../assets/aboutUs/au1.jpg'
import ourStoryImg1 from '../../../assets/aboutUs/ourStoryImg.png'
import ourMissionImg1 from '../../../assets/aboutUs/ourMissionImg1.png'
import Clients from '../OurClients/Clients'
import Stats from '../Stats/Stats'

export default function AboutUs() {

  const aboutUsContent = {
    "paragraphs": [
      {
        "text": "Welcome to Munshi Wholesale, your one-stop destination for high-quality hardware tools at wholesale prices. Established in May 2022 in the UK and expanding to the USA in October 2023, we've quickly become a trusted name in the industry."
      },
      {
        "text": "At Munshi Wholesale, we offer a wide range of power tools, hand tools, safety equipment, and accessories to meet your every need. Our commitment to customer satisfaction and competitive pricing has built our reputation for reliability and integrity."
      },
      {
        "text": "We pride ourselves on sourcing the best products from leading manufacturers worldwide, ensuring every item meets our strict quality standards. With our personalized approach to customer service, your experience with us is nothing short of exceptional."
      },
      {
        "text": "Thank you for choosing Munshi Wholesale as your trusted hardware tool supplier. We're here to help you achieve your goals, one tool at a time."
      }
    ]
  }

  const ourStoryContent = {
    "paragraphs": [
      {
        "text": "In May 2022, Munshi Wholesale began its journey in the UK, driven by passion and dedication to redefine the wholesale hardware industry."
      },
      {
        "text": "With each passing day, our reputation for quality and reliability grew, earning us the trust of customers across the UK."
      },
      {
        "text": "In October 2023, Munshi Wholesale expanded to the USA, introducing our values and expertise to a new audience."
      },
      {
        "text": "Despite challenges, we remained committed to providing unparalleled value and service, strengthening our presence in the USA."
      },
      {
        "text": "Today, Munshi Wholesale stands as a testament to perseverance, innovation, and unwavering commitment to customer satisfaction."
      },
      {
        "text": "Join us in building a brighter future, one tool at a time."
      }
    ]
  }

  const ourMissionContect = {
    "paragraphs": [
      {
        "text": "At Munshi Wholesale, our mission is simple yet profound: to empower individuals, businesses, and communities with access to high-quality hardware tools at wholesale prices."
      },
      {
        "text": "We are dedicated to providing our customers with a seamless shopping experience, offering a wide range of products meticulously sourced from top manufacturers around the globe."
      },
      {
        "text": "Driven by a passion for excellence and a commitment to customer satisfaction, we strive to exceed expectations at every turn. Our knowledgeable team is always on hand to offer expert guidance and support, ensuring that every purchase meets your needs and exceeds your expectations."
      },
      {
        "text": "Through our unwavering dedication to quality, integrity, and innovation, we aim to be the preferred destination for all your hardware tool needs, today, tomorrow, and for years to come. Join us on our mission to build a brighter future, one tool at a time."
      }
    ]
  }




  return (
    <div className="container mx-auto space-y-10 duration-300 text-justify">
      <div>
        <h1 className='text-center text-3xl lg:text-4xl xl:text-5xl font-semibold py-5 mt-4 md:mt-10 mb-4 md:mb-12'>Our Journey and Commitment</h1>
        <img
          src={bannerImg}
          alt="Banner Image"
          className='w-full rounded-3xl mb-8 lg:mb-20'
        />
        {/* About Us Section Start */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-start justify-center gap-5 lg:gap-7 mb-2 md:mb-3 lg:mb-20'>
          <div>
            <h2 className='text-2xl font-bold mb-5 text-red-500 underline'>About Us</h2>
            <div>
              {aboutUsContent.paragraphs.map((paragraph, index) => (
                <p className='text-lg font-medium leading-8 mb-5' key={index}>{paragraph.text}</p>
              ))}
            </div>
          </div>
          <div>
            <img
              src={au1}
              alt="about us image"
              className='w-full rounded-3xl mb-7'
            />
          </div>
        </div>
        {/* About Us Section End */}

        {/* Our Story Section Start */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-start justify-center gap-5 lg:gap-7 mb-2 md:mb-3 lg:mb-20'>
          <div>
            <img
              src={ourStoryImg1}
              alt="about us image"
              className='w-full rounded-3xl mb-5 lg:mb-7'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-5 text-red-500 underline'>Our Story</h2>
            <div>
              {ourStoryContent.paragraphs.map((paragraph, index) => (
                <p className='text-lg font-medium leading-8 mb-5' key={index}>{paragraph.text}</p>
              ))}
            </div>
          </div>
        </div>
        {/* Our Story Section End */}

        {/* Our Misson Section Start */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-start justify-center gap-5 lg:gap-7 mb-2 md:mb-3 lg:mb-20'>
          <div>
            <h2 className='text-2xl font-bold mb-5 text-red-500 underline'>Our Mission</h2>
            <div>
              {ourMissionContect.paragraphs.map((paragraph, index) => (
                <p className='text-lg font-medium leading-8 mb-5' key={index}>{paragraph.text}</p>
              ))}
            </div>
          </div>
          <div>
            <img
              src={ourMissionImg1}
              alt="about us image"
              className='w-full rounded-3xl mb-7'
            />
          </div>
        </div>
        {/* Our Misson Section End */}

      </div>
      <div className='pb-10'>
        <Stats />
      </div>
      <div>
        <Clients />
      </div>
    </div>
  )
}
