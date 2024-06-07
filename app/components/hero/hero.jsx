// import heroVideo from "../../../public/animation/hero-animation.mp4";
import Video from 'next-video'
function Hero() {
  return (
    <div className="relative flex items-center justify-center h-[80vh] overflow-hidden ">
      <div className="xl:px-[420px] lg:px-[300px] md:px-[220px] sm:px-[100px] xs:px-[16px] absolute top-10 z-20 text-center ">
        <h1 className=" lg:text-[56px] md:text-[56px] sm:text-[32px] xs:text-[32px]  lg:leading-[72px] md:leading-[72px] sm:leading-[40px] xs:leading-[40px] font-semibold  text-center text-gray-800 ">
          Next-Gen <span className="text-green-500">DEPIN Network</span> for IoT
          and Industrial Security
        </h1>
        <p className="mt-4 g:text-[24px] md:text-[24px] sm:text-[18px] xs:text-[18x]  lg:leading-[32px] md:leading-[32px] sm:leading-[28px] xs:leading-[28px] text-gray-600">
          Harnessing and protecting the power of your data in previously
          unimaginable ways
        </p>
      </div>
      <div className="relative  w-full h-full max-h-[600px] z-0 overflow-hidden">
        <div className="absolute top-[-60] w-full h-3/5 bg-gradient-to-b from-[#F5F5F5] via-[#FFFFFF] via-20% via-[#F5F5F5] to-100% z-10"></div>
        <video
          autoPlay
          muted
          loop
          className="absolute  top-[-20] left-0 w-full h-full object-cover"
        >
          <source src="/animation/hero-animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <Video
          className="absolute  top-[-20] left-0 w-[220%] h-full "
          src="/animation/hero-animation.mp4"
          autoPlay
          muted
          loop
          playsInline
         
          controls={false}
        ></Video> */}

        <div className="absolute top-10 right-[-5%] lg:p-40 sm:p-20 xs:p-20 bg-green-500 rounded-full opacity-20 z-10 transform translate-x-1/4 translate-y-[-1/4] blur-2xl"></div>
        <div className="absolute bottom-0 w-full h-3/5 bg-gradient-to-t from-[#F5F5F5] via-[#FFFFFF] via-20% via-[#F5F5F5] to-100%  z-10"></div>
      </div>
      <div className="absolute bottom-[5%] left-[-2%] lg:p-48 sm:p-28 xs:p-28 bg-green-500 rounded-full opacity-20 z-10 transform translate-x-1/4 translate-y-[-1/4] blur-2xl"></div>
    </div>
  );
}

export default Hero;
