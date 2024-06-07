function Roadmap() {
    return (
      <div className="xl:pl-[12rem] lg:pl-[4rem] md:pl-[6rem] sm:pl-[2rem] flex justify-center mx-auto mt-24 overflow-hidden">
        <div className="scroll-hide scroll-smooth overflow-x-scroll h-[34rem]">
          <div className=" border-gradient flex relative xl:w-[200%] lg:w-[200%] md:w-[200%] sm:w-[400%] z-10 justify-between gap-[420px] items-center border-b-2 border-gray-300   mt-[10rem] ">
            <div className="sec1">
              <div className=" absolute bottom-[200%] ml-16 group">
                <div className="p-6 bg-white rounded-lg  mb-2 relative hover:bg-[#26BE69]  ">
                  <p className="text-gray-800 flex items-center gap-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Upgrading of the execution logic
                  </p>
  
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-[700%] w-4 h-4 bg-white rotate-45 "></div>
                </div>
              </div>
              <span className="block ml-20 p-4 bg-[#D9D9D9] rounded-full transform translate-y-1/2"></span>
              <div className=" absolute top-[200%] text-center">
                <div className="py-6  relative">
                  <h1 className="text-[24px] font-bold leading-[32px] text-[#26BE69] uppercase">
                    Integration Phase
                  </h1>
                  <p className="text-gray-800">2023 Q4</p>
                </div>
              </div>
            </div>
            <div className="sec2">
              <div className=" absolute bottom-[180%] ">
                <div className="py-6  relative text-center">
                  <h1 className="text-[24px] font-bold leading-[32px] text-[#26BE69] uppercase">
                    TestNet Alpha
                  </h1>
                  <p className="text-gray-800">2024 Q1</p>
                </div>
              </div>
              <span className="block ml-20 p-4 bg-[#D9D9D9] rounded-full transform translate-y-1/2"></span>
              <div className="ml-16 absolute top-[300%] text-center group">
                <div className="p-6 bg-white rounded-lg  mb-2 relative hover:bg-[#26BE69] ">
                  <p className="text-gray-800  py-1 flex items-center gap-4">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Testnet warmup
                  </p>
                  <p className="text-gray-800 py-1 flex items-center gap-4">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Enable External Validators
                  </p>
                  <p className="text-gray-800 py-1 flex items-center gap-4">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Upgrade Rholang Engine to Rust
                  </p>
                  <p className="text-gray-800 py-1 flex items-center gap-4">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Migrate dApps
                  </p>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-[700%] w-4 h-4 bg-white rotate-45 hover:bg-[#26BE69]"></div>
                </div>
              </div>
            </div>
            <div className="sec3">
              <div className=" absolute bottom-[160%]  group">
                <div className="p-6 bg-white rounded-lg  mb-2 relative hover:bg-[#26BE69]  ">
                  <p className="text-gray-800 flex items-center gap-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Mainnet
                  </p>
                  <p className="text-gray-800 flex items-center gap-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    List on Exchanges
                  </p>
  
                  <div className="absolute -bottom-2 left-3/4 transform -translate-x-[700%] w-4 h-4 bg-white rotate-45 "></div>
                </div>
              </div>
              <span className="block ml-12 p-4 bg-[#D9D9D9] rounded-full transform translate-y-1/2"></span>
              <div className=" absolute top-[200%] text-center">
                <div className="py-6  relative">
                  <h1 className="text-[24px] font-bold leading-[32px] text-[#26BE69] uppercase">
                    Mainnet
                  </h1>
                  <p className="text-gray-800">2024 Q2</p>
                </div>
              </div>
            </div>
            <div className="sec4 ">
              <div className=" absolute bottom-[180%] ">
                <div className="py-6  relative text-center">
                  <h1 className="text-[24px] font-bold leading-[32px] text-[#26BE69] uppercase">
                    TestNet Alpha
                  </h1>
                  <p className="text-gray-800">2024 Q1</p>
                </div>
              </div>
              <span className="block ml-10 p-4 bg-[#D9D9D9] rounded-full transform translate-y-1/2"></span>
              <div className="w-auto ml-8 absolute top-[300%] text-center group">
                <div className="p-6 bg-white w-full inline-block rounded-lg  mb-2 relative hover:bg-[#26BE69] ">
                  <p className="text-gray-800 text-left py-1 flex items-center gap-4">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Sharding enabling for subnetowrks
                  </p>
                  <p className="text-gray-800 text-left py-1 flex items-center gap-4">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Inter blockchain communications to cosmos and other chains
                  </p>
  
                  <div className="absolute -top-2 left-1/2 transform -translate-x-[700%] w-4 h-4 bg-white rotate-45 hover:bg-[#26BE69]"></div>
                </div>
              </div>
            </div>
            <div className="sec5 px-60">
              <div className=" absolute bottom-[160%]  group">
                <div className="p-6 bg-white rounded-lg  mb-2 relative hover:bg-[#26BE69]  ">
                  <p className="text-gray-800 flex items-center gap-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    Mainnet
                  </p>
                  <p className="text-gray-800 flex items-center gap-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className="svg-rect"
                        width="8"
                        height="8"
                        fill="#D9D9D9"
                      />
                    </svg>
                    List on Exchanges
                  </p>
  
                  <div className="absolute -bottom-2 left-3/4 transform -translate-x-[700%] w-4 h-4 bg-white rotate-45 "></div>
                </div>
              </div>
              <span className="block ml-2 p-4 bg-[#D9D9D9] rounded-full transform translate-y-1/2"></span>
              <div className=" absolute top-[200%] text-center">
                <div className="py-6  relative">
                  <h1 className="text-[24px] font-bold leading-[32px] text-[#26BE69] uppercase">
                    Mainnet
                  </h1>
                  <p className="text-gray-800">2024 Q2</p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
  
  export default Roadmap;
  