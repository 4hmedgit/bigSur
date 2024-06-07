import Image from "next/image";
import bigSurTokenImage from "../../../public/bigSurToken.svg";
import Button from "../sharedComponents/button";

function Herobody() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 py-20 items-center lg:justify-items-start md:justify-items-start sm:justify-items-center">
      <div className="text-center">
        <Image src={bigSurTokenImage} alt="" className="max-w-full" />
      </div>
      <div className="text-center lg:text-left">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[48px] leading-[64px] font-bold">BigSur Token</h1>{" "}
          <p className="text-xl leading-8 font-normal text-left">
            BigSur is the native token facilitating value circulation in the
            BigSur Ecosystem. Here are some key utilities of the BigSur token:
          </p>
          <ol className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.88574"
                  y="0.514648"
                  width="12"
                  height="12"
                  transform="rotate(45 8.88574 0.514648)"
                  fill="#26BE69"
                />
              </svg>
              <p className="text-base text-left leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam
              </p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.88574"
                  y="0.514648"
                  width="12"
                  height="12"
                  transform="rotate(45 8.88574 0.514648)"
                  fill="#26BE69"
                />
              </svg>
              <p className="text-base text-left leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam
              </p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.88574"
                  y="0.514648"
                  width="12"
                  height="12"
                  transform="rotate(45 8.88574 0.514648)"
                  fill="#26BE69"
                />
              </svg>
              <p className="text-base text-left leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam
              </p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.88574"
                  y="0.514648"
                  width="12"
                  height="12"
                  transform="rotate(45 8.88574 0.514648)"
                  fill="#26BE69"
                />
              </svg>
              <p className="text-base text-left leading-7 font-normal">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam
              </p>
            </li>

          </ol>
        </div>
          <div className="py-10 flex justify-start md:justify-start sm:justify-center xs:justify-center">


          <Button text={"Explore Our Tokenomics Here"}/>
          </div>
      </div>
    </div>
  );
}

export default Herobody;
