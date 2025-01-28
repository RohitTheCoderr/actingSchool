
import {FaPhone,FaEnvelope, FaGlobe, FaFacebookF, FaWhatsapp, FaLinkedinIn} from "react-icons/fa";
import { FaLocationDot,FaInstagram,FaGithub } from "react-icons/fa6";
const Footer = () => {
  const phoneNumber = "9654853181"; // Replace with your phone number in international format
  const message = "Hello! I'm interested in your services."; // Default message
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="bg-[#0b081c] py-8 scrollbar-hide">
      {/* // <section id="footerSec" className="bg-[#071952] py-8"> */}
      {/* Footer Main Container */}
      <div className="w-4/5 mx-auto">
        {/* Contact Items */}
        <div
          className="flex flex-wrap justify-between border-b-2 border-gray-500 pb-4"
        >
          {/* Call Us */}
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg">
              <FaPhone className="text-[#37b7c3] mr-3" /> Call Us
            </h3>
            <div className="w-8 h-1 bg-[#37b7c3] my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Phone:  </span> +91-9654853181
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Phone:  </span> +91-8595152392
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg">
              <FaLocationDot className="text-[#37b7c3] mr-3" /> Address
            </h3>
            <div className="w-8 h-1 bg-[#37b7c3] my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Location: </span>
                NH-19 (Formerly Known as NH-2), Ballabgarh, Faridabad
              </p>
              <p className="text-gray-400 text-sm">(Delhi NCR) Haryana</p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg">
              <FaEnvelope className="text-[#37b7c3] mr-3" /> Mail Us
            </h3>
            <div className="w-8 h-1 bg-[#37b7c3] my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Info: </span>rohitkumar9643017@gmail.in
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Ad: </span>aakumar66333@gmail.com
              </p>
            </div>
          </div>

          {/* Office */}
          <div className="w-52 py-4">
            <h3 className="flex items-center uppercase text-white text-lg">
              <FaGlobe className="text-[#37b7c3] mr-3" /> Office
            </h3>
            <div className="w-8 h-1 bg-[#37b7c3] my-4"></div>
            <div>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Head: </span> Ballabgarh
              </p>
              <p className="text-gray-400 text-sm">
                <span className="text-white">Corporate: </span> India
              </p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-wrap justify-between mt-8">
          {/* Logo and About */}
          <div className="w-64 py-4">
            <div className="mb-4 w-[7rem] uppercase text-2xl text-white">
              {/* <img src="/images/common/image.png" alt="" className=" w-full rounded-full" /> */}
              Acting school
            </div>
            <p className="text-white text-sm">
              At Acting school, we bring stories to life through the magic of acting, creativity, and collaboration. Located in Faridabad Haryana, our theatre is a haven for passionate artists and an inspiring destination for audiences seeking memorable experiences.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100062899131536"><FaFacebookF className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"> <FaWhatsapp className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" /></a>
               <a href="https://www.linkedin.com/in/rohit-kumar2003/"> <FaLinkedinIn className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" /></a>
              <a href="https://www.instagram.com/rohit_kr3181/?__pwa=1"><FaInstagram className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" /></a>
              <a href="https://github.com/RohitTheCoderr"><FaGithub className="text-white hover:text-[#37b7c3] cursor-pointer text-2xl" /></a>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="w-64 py-4">
            <h4 className="text-white text-lg font-semibold mb-2">
              GET IN TOUCH
            </h4>
            <div className="w-8 h-1 bg-[#37b7c3] mb-4"></div>
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full p-2 rounded mb-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded mb-2"
              rows="3"
            ></textarea>
            <button className="w-full bg-[#37b7c3] text-white py-2 rounded hover:bg-[#088395]">
              SEND MESSAGE
            </button>
          </div>

          {/* Business Hours */}
          <div className="w-64 py-4">
            <h4 className="text-white text-lg font-semibold mb-2">
              MEETING HOURS
            </h4>
            <div className="w-8 h-1 bg-[#37b7c3] mb-4"></div>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day, idx) => (
              <p
                key={idx}
                className="flex justify-between text-gray-400 text-sm"
              >
                <span className="text-white">{day}</span>{" "}
                {day === "Sunday" ? "Close" : "9: 00 am - 7: 00 pm"}
              </p>
            ))}
          </div>
        </div>

        {/* Copyright */}

        <div className="text-center flex justify-between px-4 rounded-lg text-sm md:text-[17px] text-white py-4 bg-[#030208] mt-4">
          {/* <div className="text-center flex justify-between px-4 text-white py-4 bg-[#071952] mt-4"> */}
          <div>© 2024All Rights Reserved Terms of Use and Privacy Policy</div>
          <div>Website Developed By Rohit kumar</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
