import React from "react";
import Button from "../components/Button/Button";

function Gaming() {
  const trendingGames = [
    {
      img: "/game-poster-1.jpg",
      followers: "40 followers",
    },
    {
      img: "/game-poster-2.jpg",
      followers: "30 followers",
    },
    {
      img: "/game-poster-3.jpg",
      followers: "100 followers",
    },
    {
      img: "/game-poster-4.jpg",
      followers: "250 followers",
    },
  ];
  return (
    <div className="bg-[#39289F]">
      <nav className="flex flex-row items-center text-white justify-between container mx-auto p-5">
        <div className="text-[29px] font-extrabold">Logo</div>
        <div className="flex flex-row items-center gap-10">
          <div className="hover:underline">Home</div>
          <div className="hover:underline">About Us</div>
          <div className="hover:underline">Portfolio</div>
          <div className="hover:underline">News</div>
          <Button
            btnText="Contact Us"
            className="w-[131px] h-[40px] bg-[#FA9021] rounded-lg "
          />
        </div>
      </nav>
      <div className="container mx-auto flex flex-row items-center justify-center text-white ">
        <div>
          <div className="font-bold text-[20px] leading-[31px] text-[#E87D0E]">
            Proved By prodesigner
          </div>
          <div className="font-bold text-[50px] leading-[77px] mt-[17px]">
            Work that we produce for our clients
          </div>
          <div className="font-medium text-[16px] text-white mt-[30px] w-[527px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </div>
          <Button
            btnText="Get more details"
            className="w-[195px] h-[53px] bg-[#FA8305] rounded-[40px] mt-[50px] shadow-xl font-medium text-[16px] text-white"
          />
        </div>
        <div>
          <img src="/game-controler.png" alt="" />{" "}
        </div>
      </div>

      <div className="mt-[132px] container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full px-20 text-white">
          <div className="font-bold text-[31px] leading-[58px] ">
            Currently Trending Games
          </div>
          <Button
            btnText="See All"
            className="bg-[#FFFFFF1C] w-[139px] h-[57px]  rounded-[10px] font-medium text-[20px]"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-12 mt-[60px]">
          {trendingGames?.map((element, idx) => {
            return (
              <div className="flex flex-col items-center">
                <div className="w-[251px] h-[277px] rounded-[20px]">
                  <img
                    src={element?.img}
                    alt=""
                    className="w-full h-full rounded-[20px]"
                  />
                </div>
                <div className="mt-[25px] text-white font-medium text-[22px]">
                  {element?.followers}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto"></div>
    </div>
  );
}

export default Gaming;
