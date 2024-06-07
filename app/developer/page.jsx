import Image from "next/image";
import React from "react";
import Button from "../components/sharedComponents/button";
import developerHeroImage from "../../public/developerHero.svg";

function DeveloperPage() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto xl:px-44 lg:px-10 md:px-20 sm:mx-6 xs:mx-6 mb-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 py-20 sm:py-10 xs:py-6 items-center xl:justify-items-end lg:justify-items-end md:justify-items-end sm:justify-items-center xs:justify-items-center">
          <div className="text-center lg:text-left">
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] xs:text-[18px] text-left  lg:leading-[48px] md:leading-[48px] sm:leading-[28px] font-normal">
              Our developer-focused infrastructure ensures that deploying and
              managing your decentralized applications on the Big Sur Network is
              a seamless experience. We understand that developers are the
              driving force behind innovation. Thata&apos;s why we provide a
              comprehensive suite of developer-friendly tools and APIs designed
              to streamline the development process. From smart contract
              frameworks to SDS, SDKs and testing environments, our tools
              empower you to turn your dapps vision into reality.
            </h1>
            <div className="w-full  flex-wrap flex lg:flex-row md:flex-row sm:flex-col items-center justify-start gap-6 pt-10">
              <Button text={"Docs"} variant={"filled"} width={"lg:w-auto md:w-auto sm:w-full xs:w-full"} />
              <Button
                text={"SDK"}
                variant={"outline"}
                width={"lg:w-auto md:w-auto sm:w-full xs:w-full"} 
              />
            </div>
          </div>
          <div className="flex">
            <Image src={developerHeroImage} alt="" className=" w-full" />
          </div>
        </div>
        <div className="absolute top-20 left-[-5%] lg:p-40 md:p-40 sm:p-20 xs:p-20 bg-green-500 rounded-full opacity-20 z-10 transform translate-x-1/4 translate-y-[-1/4] blur-2xl"></div>

       
      </div>
    </main>
  );
}

export default DeveloperPage;
