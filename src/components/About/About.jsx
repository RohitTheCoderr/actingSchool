import React from "react";
// import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
function About() {
  return (
    <>
      <section className="h-auto w-full scrollbar-hide ">
        <div className=" sm:pt-[1rem] md:pt-0 lg:pt-2 xl:pt-[4rem] ">
          <div className=" h-auto w-full flex justify-evenly flex-wrap-reverse pt-[5rem]  sm:pt-[5.5rem] md:pt-[6rem] lg:pt-[5rem] xl:pt-4 pb-6  lg:pb-12 xl:pb-16 ">

            <div className="px-2 py-1 sm:py-4 lg:pt-4 xl:py-0 h-auto sm:h-[14rem] md:h-auto lg:w-[25rem] xl:w-[35rem]  mt-[1rem] xl:mt-[3rem] lg:flex flex-col ">
              <h1 className="text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[32px] xl:text-[45px] xl:pt-7 tracking-[2px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[5px] xl:tracking-[8px] font-semibold text-center lg:text-start xl:text-start">EVERYTHING ABOUT US</h1>

              <p className="text-white font-sans font-semibold text-[14px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[25px] pt-3 sm:pt-4 md:pt-6 lg:pt-4 xl:pr-10">
                At Acting school, we bring stories to life through the magic of acting, creativity, and collaboration. Located in Faridabad Haryana, our theatre is a haven for passionate artists and an inspiring destination for audiences seeking memorable experiences.
              </p>
              <p className="text-white font-sans font-semibold text-[14px] sm:text-[18px] md:text-[20px] lg:text-[18px] xl:text-[25px] pt-3 sm:pt-4 md:pt-6 lg:pt-2 xl:pr-10">
                Our mission is to nurture talent, evoke emotions, and build a community where art thrives. We are dedicated to delivering exceptional performances that entertain, enlighten, and inspire audiences of all ages.
              </p>
            </div>
            <div className=" h-auto sm:h-auto xl:h-[35rem]  w-screen sm:w-2/3 md:w-2/3 lg:w-[25rem] xl:w-[35rem] lg:mt-[1rem]  xl:mt-[5.5rem] flex justify-center">
              <img className="h-[95%] xl:h-auto w-[95%] xl:w-full" src="img/about.png" alt="" />
            </div>
          </div>

          {/* ..............next...section......... */}

          <div className="h-auto mt-8 py-2">
            <h1 className="text-white text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[45px] text-center">OUR COURSES</h1>
            <p className="text-white text-[14px] sm:text-[18px]  md:text-[20px] lg:text-[25px] xl:text-2xl text-center pt-3">1500s, when an unknown printer took a galley of type and</p>

            <div className="h-auto flex flex-wrap gap-6 w-[85vw] sm:w-[80vw] md:w-[75%]  m-auto mt-0 lg:mt-[2rem] xl:mt-[2rem] mb-[4rem] sm:mb-[5rem] md:mb-[5rem] lg:mb-[7rem] xl:mb-[9rem]">
              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21552.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">History of Theatre and Drama</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>
                <p className="text-[12px] px-3 py-2">
                  Study of classical plays
                </p>
                <p className="text-[12px] px-3 py-2">
                  Evolution of modern theatre

                </p>
                <p className="text-[12px] px-3 py-2">
                  Famous playwrights and their impact
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21553.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">Children’s Theatre Programs</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Acting basics for kids
                </p>
                <p className="text-[12px] px-3 py-2">
                  Fun and creative role-playing activities
                </p>
                <p className="text-[12px] px-3 py-2">
                  Team-building and confidence exercises
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21554.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">Public Speaking and Presentation</h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Overcoming stage fright</p>
                <p className="text-[12px] px-3 py-2">
                  Effective storytelling</p>
                <p className="text-[12px] px-3 py-2">
                  Voice projection and audience engagement</p>


                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21555.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2"> Script Analysis and Interpretation                </h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Breaking down scripts
                </p>
                <p className="text-[12px] px-3 py-2">
                  Identifying character motivations
                </p>
                <p className="text-[12px] px-3 py-2">
                  Understanding subtext
                </p>
                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21556.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">                Directing for Theatre
                </h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>
                <p className="text-[12px] px-3 py-2">
                  Vision and leadership in productions
                </p>
                <p className="text-[12px] px-3 py-2">
                  Collaborating with cast and crew
                </p>
                <p className="text-[12px] px-3 py-2">
                  Blocking and staging
                </p>

                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>

              <div className="h-auto w-[16rem] sm:w-[17rem] pb-2 mt-8 border bg-white rounded-md m-auto shadow-2xl shadow-gray-900">
                <img className="h-[40%] sm:h-[8rem] w-[90%] sm:w-[15rem] m-auto mt-2 sm:mt-4" src="img/21557.png" alt="" />
                <h1 className="text-[16px] sm:text-[20px] pl-4 pt-2">                Lighting and Sound Design
                </h1>
                <div className="flex pl-4 mt-2 gap-1 sm:gap-2">
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                  <IoIosStar className="text-yellow-500 text-[12px] sm:text-[14px] " />
                </div>

                <p className="text-[12px] px-3 py-2">
                  Technical aspects of lighting

                </p>
                <p className="text-[12px] px-3 py-2">
                  Creating moods with soundscapes
                </p>
                <p className="text-[12px] px-3 py-2">
                  Operating equipment
                </p>


                <button className="h-[30px] w-[9rem] bg-[#170075] text-[14px] ml-3 rounded text-white">ENROLL NOW</button>
              </div>


            </div>
          </div>
        </div>
      </section >
    </>
  )
}
export default About




