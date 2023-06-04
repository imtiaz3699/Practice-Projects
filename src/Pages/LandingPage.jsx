import React from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function LandingPage() {
  const whyChooseUs = [
    {
      first: "Professionalism",
      second: "We deliver the final work with great professional way.",
      third: "more info",
    },
    {
      first: "Smooth Workflow",
      second: "We provide the most easy smoth workflow of interior design.",
      third: "more info",
    },
    {
      first: "Trusted Platform",
      second: "People trust us since we openend the company",
      third: "more info",
    },
    {
      first: "Qualified employee",
      second: "Our employees are the best of the field from the city",
      third: "more info",
    },
  ];
  const questions = [
    { name: "Contemporary", icon: "<h1>+</h1>" },
    { name: "Minimalis", icon: "<h1>+</h1>" },
    { name: "Industrial", icon: "<h1>+</h1>" },
    { name: "See more catagory", icon: "<h1>+</h1>" },
  ];

  const services = [
    {
      icon: "/search.png",
      name: "Search doctor",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      icon: "/medicine.png",
      name: "Online pharmacy",
      description:
        "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      icon: "/consultation.png",
      name: "Consultation",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      icon: "/details.png",
      name: "Details info",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      icon: "/emergency-care.png",
      name: "Emergency care",
      description:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      icon: "",
      name: "Tracking",
      description: "Track and save your medical history and health data ",
    },
  ];
  const latestArticles = [
    {
      img: "/doctor1.jpg",
      heading: "Disease detection, check up in the laboratory",
      about:
        "In this case, the role of the health laboratory is very important to doa disease detection...",
      readMore: "Read more",
    },
    {
      img: "/doctor2.jpg",
      heading: "Herbal medicines that are safe for consumption",
      about:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
      readMore: "Read more",
    },
    {
      img: "/doctor3.jpg",
      heading: "Natural care for healthy facial skin",
      about:
        "A healthy lifestyle should start from now and also for your skin health.There are some...",
      readMore: "Read more",
    },
  ];
  return (
    <div>
      <div className="container mx-auto text-center ">
        <nav className="flex flex-row justify-between p-10 ">
          <div className="text-2xl font-medium">Shydy Rhymes</div>
          <div className="flex flex-row justify-center gap-10 text-lg font-normal ">
            <div className="">Furniture</div>
            <div>Shop</div>
            <div>About Us</div>
            <div>Contact</div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </nav>
        <div className="flex flex-row gap-[109px] justify-center items-center mt-[84px]">
          <div className="flex flex-col gap-5 text-left">
            <h1 className="text-[48px] font-bold leading-[56px]">
              Virtual healthcare for you
            </h1>
            <p className="text-[21px] font-light leading-[32px] text-[#7D7987] mt-[25px]">
              Trafalgar provides progressive, and affordable
              <br></br> healthcare, accessible on mobile and online for everyone
            </p>
            <Button
              btnText="Consult today"
              className="w-[200px] h-[56px] bg-[#458FF6] rounded-full text-white font-bold text-[21px] mt-[45px]"
            />
          </div>
          <div className="w-[693px] h-[598px]">
            <img src="/1.png" className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[192px] gap-7">
          <h1 className="font-bold text-[36px]">Our Services</h1>
          <div className="w-36 h-[3px] bg-black"></div>
          <p className="font-light text-[18] text-[#7D7987] w-[952px]">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-[34px]   mt-[80px]">
          {services?.map((element) => {
            return (
              <div className="flex flex-col drop-shadow border p-5 gap-[10px] rounded-2xl">
                <div className="w-[63px] h-[95px]">
                  <img src={element.icon} alt="" />
                </div>
                <h1 className="text-left font-bold text-[24px]">
                  {element?.name}
                </h1>
                <p className="text-left">{element?.description}</p>
              </div>
            );
          })}
        </div>
        <Button
          btnText="Learn more"
          className="border border-blue-500 w-[200px] h-[56px] text-blue-500 rounded-full text-[18px] font-bold mt-[70px]"
        />
        <div className="flex flex-row justify-center gap-[150px] mt-[220px]">
          <div className="w-[650px] h-[477px]">
            <img src="/2.png" alt="" className="w-full h-full" />
          </div>
          <div className="flex flex-col justify-center ">
            <h1 className="text-left font-bold text-[36px]">
              Leading healthcare
              <br /> providers
            </h1>
            <div className="w-10 h-1 bg-black mt-[26px]"></div>
            <p className="mt-[31px] text-left w-[450px]">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <Button
              btnText="Learn more"
              className="border border-blue-500 w-[200px] h-[56px] text-blue-500 rounded-full text-[18px] font-bold mt-[70px]"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center gap-[150px] mt-[220px]">
          <div className="flex flex-col justify-center ">
            <h1 className="text-left font-bold text-[36px]">
              Download our <br></br> mobile apps
            </h1>
            <div className="w-10 h-1 bg-black mt-[26px]"></div>
            <p className="mt-[31px] text-left w-[450px]">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <Button
              btnText="Learn more"
              className="border border-blue-500 w-[200px] h-[56px] text-blue-500 rounded-full text-[18px] font-bold mt-[70px]"
            />
          </div>
          <div className="w-[650px] h-[477px]">
            <img src="/2.png" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="mt-[266px] flex justify-center">
          <div className="flex flex-col gap-3 items-center w-[1120px] bg-[#67C3F3] rounded-xl pt-[40px] pb-[80px]">
            <h1 className="font-bold text-[36px] leading-[48px] text-white ">
              What our customer are saying
            </h1>
            <div className="w-20 h-1 bg-white"></div>
            <div className="flex flex-row justify-center gap-10 items-center mt-[77px] text-white">
              <div className="flex flex-row items-center justify-center gap-10">
                <div className="w-[100px] h-[100px] rounded-full">
                  <img
                    src="/logoimage.jpg"
                    alt=""
                    className="w-[100%] h-[100%] rounded-full"
                  />
                </div>
                <div>
                  <div className="text-[22px] font-bold leading-[48px]">
                    Adward Newgate
                  </div>
                  <div className="font-normal text-[18px]">Founder Circle</div>
                </div>
              </div>

              <p className="w-96 text-left">
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 mt-[227px]">
          <h1 className="font-bold text-[36px]">
            Check out our latest article
          </h1>
          <div className="w-20 h-1 bg-black"></div>
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-row gap-10">
              {latestArticles?.map((element, idx) => {
                return (
                  <div key={idx} className="w-[350px] shadow-xl">
                    <div className="w-[349px] ">
                      <img
                        src={element.img}
                        alt=""
                        className="w-full rounded-t-lg"
                      />
                    </div>
                    <div className="p-3 text-left ">
                      <div className=" mt-[20px] font-bold text-[21px] leading-[32px] ">
                        {element.heading}
                      </div>
                      <div className="font-light text-[16px] leading-[28px] mt-[12px]">
                        {element.about}
                      </div>
                      <Button
                        className=" mt-[25px] text-[#4089ED] font-semibold text-[17px] mb-[35px]"
                        btnText="Read more"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              btnText="View All"
              className="font-bold mt-[72px] text-[18px] leading-[48px] border border-blue-500 text-blue-500 w-[200px] h-[56px] rounded-full "
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-500 mt-[200px]  text-white">
        <div className="container mx-auto">
          <div className="flex flex-row items-center justify-center py-[109px]">
            <div>
              <div className="font-bold text-[24px] leading-[30px]">
                Trafalgar
              </div>
              <div className="font-light text-[18px] leading-[28px] mt-[22px] w-[500px]">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </div>
              <div className="font-light text-[16px] mt-[31px]">
                ©Trafalgar PTY LTD 2020. All rights reserved
              </div>
            </div>
            <div className="flex flex-row gap-20 font-light text-[18px]">
              <div>
                <h1 className="font-bold text-[20px] leading-[60px]">
                  Company
                </h1>
                <p>About</p>
                <p>Testimonials</p>
                <p>Find a doctor</p>
                <p>Apps</p>
              </div>
              <div>
                <h1 className="font-bold text-[20px] leading-[60px]">Region</h1>
                <p>Indonesia</p>
                <p>Singapore</p>
                <p>Hongkong</p>
                <p>Canada</p>
              </div>
              <div>
                <h1 className="font-bold text-[20px] leading-[60px]">Help</h1>
                <p>Help Center</p>
                <p>Contact Support</p>
                <p>Instructions</p>
                <p>How it works</p>
              </div>
              <div>
                <h1></h1>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
