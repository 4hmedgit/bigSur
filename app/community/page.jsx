import Image from "next/image";
import networkHeroImage from "../../public/networkHero.svg";
import Button from "../components/sharedComponents/button";

function CommunityPage() {
  return (
    <main>
      <div className="max-w-screen-xl py-[5rem] mx-auto xl:px-44 lg:px-10 md:px-20 sm:mx-6 xs:mx-6 mb-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8  items-center lg:justify-items-end md:justify-items-end sm:justify-items-center xs:justify-items-center">
          <div className="flex flex-col items-start justify-start">
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] xs:text-[18px] text-left  lg:leading-[48px] md:leading-[48px] sm:leading-[28px] font-normal">
              BigSur&apos;s DEPIN Network leads in IoT and Industrial Security,
              providing advanced solutions that leverage blockchain technology,
              Decentralized Confidential Computing (DeCC), and Fully Harmonic
              Encryption.
            </h1>
            <div className="w-full flex-wrap flex lg:flex-row md:flex-row sm:flex-col items-center justify-start gap-10 pt-10">
              <Button text={"Enter the BigSur Dao"} variant={"filled"} width={"lg:w-auto md:w-auto sm:w-full xs:w-full"} />
              <Button
                text={"Join Our Discord"}
                variant={"outline"}
                width={"lg:w-auto md:w-auto sm:w-full xs:w-full"} 
              />
            </div>
          </div>
          <div className="text-center">
            <Image src={networkHeroImage} alt="" className="max-w-full" />
          </div>
        </div>
        <div className="absolute top-20 left-[-5%] lg:p-40 md:p-40 sm:p-20 xs:p-20 bg-green-500 rounded-full opacity-20 z-10 transform translate-x-1/4 translate-y-[-1/4] blur-2xl"></div>
      </div>
    </main>
  );
}

export default CommunityPage;
