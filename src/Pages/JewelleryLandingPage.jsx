import React from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function JezSalad() {
  const data = [
    {
      img: "/house.png",
      heading: "Own fruit orchard",
      description:
        "Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang memiliki cabang toko Jez Salad.",
      btnText: "Read more.....",
    },
    {
      img: "/one.png",
      heading: "#1 Healthy Fruit Salad",
      description:
        "The pioneer of healthy fruit salads that are delicious & suitable for all people with the best quality assurance.",
      btnText: "Read more....",
    },
    {
      img: "/trophy.png",
      heading: "100 Top Brand",
      description:
        "We are one of the best brands in the Food and Beverage sector in Indonesia.",
      btnText: "Read more...",
    },
  ];
  const whatPeopleSaying = [
    {
      img: "/salenaGomez.jpg",
      name: "Selena Gomz",
      birthDay: "22 Years",
      description:
        "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
    },
    {
      img: "/profileBoy.jpg",
      name: "Selena Gomz",
      birthDay: "22 Years",
      description:
        "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
    },
    {
      img: "/profileGirl.jpg",
      name: "Kenna yee",
      birthDay: "22 Years",
      description:
        "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine. I recommend this salad to all of you guys! because they really take care of the quality.",
    },
  ];
  const discount = [
    {
      img: "/salad1.jpg",
      name: "Salad Yummy Red",
      price: "$ 3.99",
    },
    {
      img: "/salad2.jpg",
      name: "Salad Yummy White",
      price: "$ 2.99",
    },
    {
      img: "/salad3.jpg",
      name: "Salad Yummy Mix 2",
      price: "$ 5.49",
    },
  ];
  const footer = [
    {
      name: "Jez Salad",
      one: "Jez Salad is the pioneer of healthy fruit salad with high nutrition.",
      two: "",
      three: "",
      four: "©Copyright Jez Salad",
    },
    {
      name: "Feature",
      one: "Menu",
      two: "Promo",
      three: "Contact",
      four: "About us",
    },
    {
      name: "Get in Touch",
      one: "8819 Ohio St. South Gate,CA 90280",
      two: "Ourstudio@hello.com",
      three: "+1 386-688-3295",
      four: "",
    },
  ];
  return (
    <div className="bg-[#FFFFFF]">
      <div className="container mx-auto">
        <nav className="flex flex-row justify-between items-center p-10 ">
          <div className="text-2xl font-medium">
            <span>Jez</span> Salad
          </div>
          <div className="flex flex-row justify-center gap-10 text-lg font-normal ">
            <div className="">Home</div>
            <div>Menu</div>
            <div>Contact</div>
            <div>About Us</div>
          </div>
          <div>
            <Button
              btnText="Signin"
              className="w-[126px] h-[54px] bg-[#FB9333] rounded-full text-white text-[16px] font-medium"
            />
          </div>
        </nav>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-center gap-5 mt-[141px]">
          <div>
            <div className="w-[213px] h-[53px] bg-[#FFF0DC] text-[#FB9333] text-[16px] font-semibold rounded-full text-center flex justify-center items-center">
              #1 Best Healthy Salad
            </div>
            <div className="font-bold text-[72px] leading-[93px] text-[#575757] mt-[30px]">
              <span className="text-[#FB9333]">Skip</span> The Diet, Just Eat
              Healthy With Jez Salad
            </div>
            <div className="font-medium text-[20px] text-[#828282] mt-[30px]">
              Imagine you don't need a diet because we provide healthy and
              delicious food for you!
            </div>
            <Button
              btnText="Order"
              className="w-[192px] h-[68px] bg-[#FB9333] rounded-full text-white font-semibold text-[18px] leading-[23.4px] mt-[35px]"
            />
          </div>
          <div className="border-2 border-[#FB9333] p-5 rounded-xl">
            <img src="/eating.jpg" alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-row gap-10 mt-[82px] text-[#575757] text-[24px] font-semibold">
        <div>
          <div>5.0000+</div>
          <div className="text-[#828282] text-[16px] font-medium">Customer</div>
        </div>
        <div>
          <div>8.000+</div>
          <div className="text-[#828282] text-[16px] font-medium">Delivery</div>
        </div>
        <div>
          <div>1.000+</div>
          <div className="text-[#828282] text-[16px] font-medium">Ratings</div>
        </div>
      </div>
      <div className="container mx-auto flex flex-row gap-[120px] justify-center items-center mt-[120px]">
        <div className="text-[48px] font-semibold text-[#585858] w-[586px]">
          WHY CHOOSE US{" "}
          <span className="text-[#FB9333]">FOR YOUR HEALTHY FOOD</span>
        </div>
        <div className="font-normal text-[20px] text-[#828282] w-[450px]">
          We continue to consistently choose and maintain the quality of the
          fruit served, so that it remains fresh and nutritious when you eat it.
        </div>
      </div>
      <div className="container mx-auto flex flex-row justify-center mt-[70px] gap-[80px]">
        {data?.map((element, idx) => {
          return (
            <div
              key={idx}
              className="w-[370px] px-[30px] pt-[30px] pb-[50px] hover:shadow-2xl"
            >
              <div className="bg-[#FFE8C880] w-[100px] h-[100px] p-4 rounded-2xl">
                <img src={element?.img} alt="" />
              </div>
              <div className="mt-[68px] text-[28px] font-semibold ">
                {element?.heading}
              </div>
              <div className="mt-[12px] font-normal text-[16px] text-[#575757]">
                {element?.description.slice(0, 100)}
              </div>
              <Button
                btnText={element?.btnText}
                className=" rounded-full transition-all  hover:w-[170px] mt-[24px] h-[49px] text-black text-[16px] font-normal hover:text-white hover:bg-[#FB9333]"
              />
            </div>
          );
        })}
      </div>
      <div className="bg-[#FFF8ED] mt-[100px] py-[120px]">
        <div className="container mx-auto flex flex-row gap-[86px]">
          <div>
            <div className="text-[48px] font-semibold leading-[63.9px] text-[#333333]">
              What Are People Saying{" "}
              <span className="text-[#FB9333]">About Us</span>
            </div>
            <div className="font-normal text-[16px] leading-[24px] mt-[30px]">
              We are very happy if you are satisfied with our service and
              products, let's read pure reviews from customers who bought our
              products.
            </div>
            <div className="font-bold text-[58px] text-[#333333] mt-[32px]">
              02 <span className="text-[25px] text-[#CCCCCC]"> /05</span>
            </div>
            <div className="flex flex-row gap-5 mt-[24px]">
              <Button
                btnText="Prev"
                className="w-[56px] h-[56px] bg-[#FFE8C880] text-black hover:bg-[#FB9333] rounded-lg font-bold hover:text-white"
              />
              <Button
                btnText="Next"
                className="w-[56px] h-[56px] bg-[#FFE8C880] text-black hover:bg-[#FB9333] rounded-lg font-bold hover:text-white"
              />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            {whatPeopleSaying?.map((element, idx) => {
              return (
                <div className="w-[249px] bg-[white] p-[24px] shadow-xl">
                  <div className="w-[90px] h-[90px] translate-y-[-50px]">
                    <img className="" src={element?.img} alt="" />
                  </div>
                  <div className="mt-[20px] text-[24px] font-semibold leading-[31px]">
                    {element?.name}
                  </div>
                  <div className="text-[14px] font-medium text-[#999999]">
                    22 Years
                  </div>
                  <div className="mt-[20px] text-[16px] font-normal leading-[24px]">
                    The salad is fresh!!! Don't ask about the sauce again, it's
                    really delicious, it's going to be routine. I recommend this
                    salad to all of you guys! because they really take care of
                    the quality.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[120px] container mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-[#FB9333] font-medium text-[20px]">
            MENU YANG MEMBUATMU JATUH CINTA
          </div>
          <div className="text-[#585858] w-[732px] text-center font-semibold text-[48px] leading-[67px]">
            ENJOY THE BEST MENU AND GET{" "}
            <span className="text-[#FB9333]">DISCOUNTS</span> AVAILABLE
          </div>
        </div>
        <div className="flex flex-row items-center mt-[70px] justify-center gap-10">
          {discount?.map((element, idx) => {
            return (
              <div
                className="rounded-3xl w-[450px] h-[520px] flex flex-col justify-end p-5"
                style={{ backgroundImage: `url(${element.img})` }}
              >
                <div className="font-medium text-white text-[24px] leading-[31px]">
                  {element.name}
                </div>
                <div className="font-bold text-[40px] text-white">
                  {element.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center text-center">
        <div className="bg-[#FFF8ED] mt-[150px] w-[1170px] rounded-xl p-[20px] flex flex-col items-center text-[#585858] leading-[67px]">
          <h1 className="font-semibold text-[20px] leading-[36px] text-[#FB9333] ">
            Our Subscribe
          </h1>
          <p className="text-[48px] font-semibold leading-[67px] w-[655px] text-[#585858]">
            Subscribe To Get The Latest Promo from Jez Salad
          </p>
          <p className="mt-[24px] font-medium text-[16px] leading-[25.6px] w-[462px] text-[#575757]">
            We recommended you to subscribe to our promo program, drop your
            email below to get daily update about us
          </p>
          <div className="mt-[80px] w-[700px] h-[80px] mb-[120px]">
            <Input
              className="outline-none rounded-full bg-white w-full pl-10"
              placeholder="Enter your email address"
            />
            <Button
              btnText="Subscribe"
              className="w-[170px] h-[64px] rounded-full bg-[#FB9333] text-white mt-10 font-semibold"
            />
          </div>
        </div>
      </div>

      <div className="mt-[131px] flex flex-row container mx-auto justify-center">
        <div className="flex flex-row  ">
          {footer?.map((element, idx) => {
            return (
              <div key={idx} className="w-[300px] flex flex-col gap-4">
                <div className="text-[#FB9333]">{element?.name}</div>
                <div>{element?.one}</div>
                <div>{element?.two}</div>
                <div>{element?.three}</div>
                <div>{element?.four}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JezSalad;
