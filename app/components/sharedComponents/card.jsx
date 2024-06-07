import Image from "next/image";

/* eslint-disable react/prop-types */
function Card(props) {
    const headingClasses = `text-${props.headingSize || "[32px]"} leading-${
      props.headingLineHeight || "[32px]"
    } font-bold text-`;
  
    return (
      <div className=" w-auto  bg-white rounded-md ">
        <div className="p-6 ">
          <div className="flex flex-col items-start gap-4">
            <Image src={props.icon} alt="" />
            <h2
              className={headingClasses}
              style={{ color: props.headingColor || "#1F2937", fontSize: props.headingSize || "24px"}}
            >
              {props.heading}
            </h2>
            <p className="mt-2 text-base leading-[28px] text-[#2F2F2F]">
              {props.bodyText}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  