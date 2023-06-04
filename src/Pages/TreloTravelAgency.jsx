import React from "react";
import Button from "../components/Button/Button";

function TreloTravelAgency() {
  const upComingOffers = [
    {
      img: "/travelOne.jpg",
      type: "Relax",
      package: "4 Days, 3 Nights",
      place: "Loga Sea",
      price: "700$",
    },
    {
      img: "/travelTwo.jpg",
      type: "Adventure",
      package: "4 Days, 3 Nights",
      place: "Ansgar Scheffold",
      price: "400$",
    },
    {
      img: "/travelThree.jpg",
      type: "Relax",
      package: "4 Days, 3 Nights",
      place: "Lona X",
      price: "340$",
    },
  ];
  const recomendations = [
    {
      img: "/travelOne.jpg",
      name: "Kina Mountain",
      city: "Columbia",
      stars: "4.5",
    },
    {
      img: "/travelTwo.jpg",
      name: "Kina Mountain",
      city: "Columbia",
      stars: "4.5",
    },
    {
      img: "/travelThree.jpg",
      name: "Kina Mountain",
      city: "Columbia",
      stars: "4.5",
    },
    {
      img: "/travelOne.jpg",
      name: "Kina Mountain",
      city: "Columbia",
      stars: "4.5",
    },
  ];
  const feedBack = [
    {
      feedBack:
        "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
      name: "-Vand D",
      greet: "Happy Treloo",
      img: "/profile-image.jpg",
    },
    {
      feedBack:
        "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
      name: "-Tru Vio",
      greet: "Happy Treloo",
      img: "/profile-image.jpg",
    },
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/mountain.jpg)",
          width: "100%",
          height: "100vh",
        }}
        className="bg-blur-xl"
      >
        <nav className="flex flex-row items-center justify-between container mx-auto text-white pt-10">
          <div className="">Trelo</div>
          <div className="flex flex-row gap-5 items-center justify-center">
            <div>Review</div>
            <div>Tips</div>
            <div>Alerts</div>

            <Button
              btnText="Blog"
              className="bg-white w-[141px] h-[65px] rounded-xl font-medium text-[24px] leading-[36px] text-blue-500"
            />
          </div>
        </nav>
        <div className=" text-white container mx-auto mt-[190px] ">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-[64px] font-semibold leading-[96px] w-[820px] ">
              Discover Your Life, Travel Where You Want
            </h1>
            <p className="font-semibold text-[24px] leading-[48px] w-[784px]">
              Would you explore natur paradise in the world, let’s find the best
              destination in world with us.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-row justify-center">
        <div className="">
          <div className="translate-y-[-130px] flex flex-row bg-white rounded-t-xl w-[279px] p-3 font-medium text-[18px] leading-[27px] gap-5  h-[100px]">
            <div className="flex flex-row items-center justify-center w-[121px]  content-center hover:bg-[#3E86F533] h-[66px] rounded-2xl">
              Flight
            </div>
            <div className="flex flex-row items-center justify-center w-[121px] hover:bg-[#3E86F533] h-[66px] rounded-2xl">
              Hotel
            </div>
          </div>
          <div className="w-[1180px] flex flex-row justify-center gap-5 bg-white py-5 translate-y-[-130px] rounded-tr-3xl h-[274px]">
            <div className="flex h-[154px] justify-center items-center flex-row gap-5 border-[1px] rounded-2xl w-[477px] py-[44px] px-5 border-gray-300">
              <div className="">
                <div className="font-medium text-[#00000080] text-[18px] leading-[27px]">
                  Living from
                </div>
                <div className="text-[24px] font-medium leading-[27px]">
                  Dubai
                </div>
              </div>
              <div className="w-[40px] h-[40px]">
                <img src="/direct-flight.png" alt="" />
              </div>
              <div>
                <div className="font-medium text-[#00000080] text-[18px] leading-[27px]">
                  Going to
                </div>
                <div className="text-[24px] font-medium leading-[27px]">
                  New York
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-5 border-[1px] h-[154px] rounded-2xl w-[477px] py-[44px] px-5 border-gray-300">
              <div className="">
                <div className="font-medium text-[#00000080] text-[18px] leading-[27px]">
                  Living from
                </div>
                <div className="text-[24px] font-medium leading-[27px]">
                  Dubai
                </div>
              </div>
              <div className="w-[40px] h-[40px]">
                <img src="/direct-flight.png" alt="" />
              </div>
              <div>
                <div className="font-medium text-[#00000080] text-[18px] leading-[27px]">
                  Going to
                </div>
                <div className="text-[24px] font-medium leading-[27px]">
                  New York
                </div>
              </div>
            </div>
            <div className="bg-blue-500 rounded-2xl w-[154px] h-[154px] p-5">
              <img src="/searchIcon.png" alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="font-semibold text-[48px] leading-[72px]">
          Special Upcoming Offers
        </h1>
        <div className="flex flex-row items-center bg-white p-4 shadow-2xl gap-5 mt-[60px] rounded-[25px]">
          <div className="hover:bg-[#3E86F5] rounded-lg p-1 hover:text-white font-medium text-[18px] text-[#00000080] cursor-pointer">
            Team
          </div>
          <div className="hover:bg-[#3E86F5] rounded-lg p-1 hover:text-white font-medium text-[18px] text-[#00000080] cursor-pointer">
            Couple
          </div>
          <div className="hover:bg-[#3E86F5] rounded-lg p-1 hover:text-white font-medium text-[18px] text-[#00000080] cursor-pointer">
            Family
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-row items-center justify-center gap-10 mt-[40px]">
        {upComingOffers?.map((element, idx) => {
          return (
            <div className="w-[380px] h-[457px] rounded-[50px] shadow-2xl p-10">
              <div className="flex flex-row items-center gap-2">
                <div className="w-[293px] h-[273px]">
                  <img
                    src={element?.img}
                    alt=""
                    className="rounded-[50px] w-full h-full"
                  />
                </div>
                {/* <div className="rotate-90">18 June 2022</div> */}
              </div>
              <div>
                <div className="mt-[20px] text-[#00000080] text-[14px] font-medium">
                  {" "}
                  <span className="bg-[#FCDDEC] text-[#F178B6]  px-[15px] py-[3px] rounded-xl">
                    {element?.type}
                  </span>
                  {element?.package}
                </div>
                <div className="text-[#000000] text-[24px] font-semibold">
                  {element?.place}
                </div>
                <div className="flex flex-row justify-between">
                  <span className="text-[24px] font-semibold leading-[36px]">
                    {element?.price}
                    <span className="text-[18px] font-semibold text-[#00000080]">
                      /Person
                    </span>
                  </span>
                  <Button
                    btnText="Book Now"
                    className="bg-[#F2F6FF] w-[107px] h-[47px] text-[#3E86F5] rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container gap-20 px-[130px] py-[80px] mx-auto flex flex-row justify-center items-center mt-[160px]">
        <div className="w-[480px] h-[800px] rounded-[75px] relative">
          <img
            src="/traveling.jpg"
            alt=""
            className="w-full h-full rounded-[75px]"
          />
          <div className="flex flex-col items-center text-[#3E86F5] font-semibold text-[36px] leading-[54px] absolute top-[100px] right-0 translate-x-[66px] shadow-xl bg-white rounded-[35px] py-[27px] px-[30px]">
            300+{" "}
            <span className="text-[18px] text-[#000000] leading-[28px]">
              DESTINATION
            </span>
          </div>
          <div className="flex flex-col items-center text-[#3E86F5] font-semibold text-[36px] leading-[54px] absolute  left-0 bottom-60  translate-x-[-80px] shadow-xl bg-white rounded-[35px] py-[27px] px-[30px]">
            300+{" "}
            <span className="text-[18px] text-[#000000] leading-[28px]">
              DESTINATION
            </span>
          </div>
          <div className="flex flex-col items-center text-[#3E86F5] font-semibold text-[36px] leading-[54px] absolute bottom-20 right-0 translate-x-[66px] shadow-xl bg-white rounded-[35px] py-[27px] px-[30px]">
            300+{" "}
            <span className="text-[18px] text-[#000000] leading-[28px]">
              DESTINATION
            </span>
          </div>
        </div>
        <div className="w-[580px] ">
          <h1 className="font-semibold text-[48px] leading-[72px]">
            Travel Any Corner of The World With Us
          </h1>
          <div className="font-semibold text-[20px] leading-[40px] text-[#00000080] mt-[20px]">
            Would you explore nature paradise in the world, let’s find the best
            destination in world with us, Would you explore nature paradise in
            the world, let’s find the best destination in world with us. Would
            you explore nature paradise in the world, let’s find the best
            destination in world with us. Would you explore nature paradise in
            the world, let’s find the best destination in world with us.
          </div>
          <Button
            btnText="Contact Us"
            className="bg-[#3E86F5] text-white w-[179px] h-[75px] font-normal rounded-[10px] mt-[20px] text-[20px]"
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center mt-[120px]">
        <h1 className="text-[48px] font-semibold">Recomended Destination</h1>
        <div className="flex flex-row gap-5 justify-center items-center mt-[40px] ">
          <div className="hover:text-[#3E86F5] text-[#00000080] font-semibold text-[18px] ">
            Popular
          </div>
          <div className="hover:text-[#3E86F5] text-[#00000080] font-semibold text-[18px]">
            Adventure
          </div>
          <div className="hover:text-[#3E86F5] text-[#00000080] font-semibold text-[18px]">
            Beneath
          </div>
        </div>
        <div className="mt-[80px] flex flex-row gap-5">
          {recomendations?.map((element, idx) => {
            return (
              <div className="p-[10px] rounded-[10px] w-[280px] shadow-2xl relative">
                <img src={element?.img} alt="" className="rounded-[10px]" />
                <div className="mt-[20px] font-semibold text-[18px] leading-[27px]">
                  {element?.name}
                </div>
                <div className="text-[#00000080] font-semibold text-[14px] leading-[27px]">
                  {element?.city}
                </div>
                <div className="absolute font-semibold flex flex-row justify-center gap-1 items-center top-5 right-5 w-[55px] h-[22px] bg-white rounded-[25px] text-center">
                  <img src="/star.png" alt="" className="w-4 h-4" /> 4.5
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[200px] container mx-auto flex flex-row justify-center items-center gap-10">
        {feedBack?.map((element, idx) => {
          return (
            <div className="flex flex-col ">
              <div className="w-[580px] px-[25px] h-[410px] font-medium text-[#000000] shadow-2xl text-[20px] text-center rounded-[50px] flex flex-col justify-center items-center">
                <div className="mt-[84px]   leading-[41.8px]">
                  Our trip to Morocco was truly a onece in a lifetime experience
                  and we are so grateful to everyone that made it happen
                  seamlessly. Our travel planner, Jaouad, was increadible.
                </div>
                <div className="text-[#3E86F5]">-Vand D</div>
                <div className="text-[#00000080]">Happy Treloo</div>
                <div className="w-[100px] translate-y-10 p-2 shadow-2xl bg-white h-[100px] rounded-full">
                  <img
                    className="rounded-full w-full h-full"
                    src="/profile-image.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container mx-auto flex flex-row items-center justify-center mt-[30px] gap-5">
        <Button
          className="rounded-xl px-2 py-2 border-2 border-[#3E86F5] text-[#3E86F5]"
          btnText="Prev"
        />
        <Button
          className="rounded-xl px-2 py-2 border-2 border-[#3E86F5] text-[#3E86F5]"
          btnText="Next"
        />
      </div>
      <div
        className="w-[1180px] relative h-[500px] rounded-[100px] text-white text-center container mx-auto mt-[120px]"
        style={{ backgroundImage: "url(/galaxy.jpg)" }}
      >
        <div className="text-center flex flex-col items-center justify-center content-center w-full h-full">
          <div className="font-semibold text-[48px] leading-[72px] w-[743px]">
            Don’t Miss The 50% Discount if You register Today
          </div>
          <Button
            btnText="Register Today"
            className="mt-[40px] w-[220px] h-[80px] bg-white rounded-lg text-[20px] font-medium text-[#3E86F5] leading-[30px]"
          />
        </div>
      </div>
      <div className="mt-[134px] container mx-auto flex flex-row justify-between">
        <div className="text-[#00000080] text-[20px] font-medium">
          © 2022 Treloo LLC - All right reserved.
        </div>
        <div className="flex font-medium text-[24px] text-[#000000BF] flex-row items-center justify-center gap-10">
          <div>Review</div>
          <div>Tips</div>
          <div>Alert</div>
          <div>Blog</div>
        </div>
      </div>
    </div>
  );
}

export default TreloTravelAgency;
