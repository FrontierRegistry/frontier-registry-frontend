import FrontierIntroductionImage from "../assets/images/FrontierRegistryBlue.jpg";

const FrontierIntroduction = () => {
  return (
    <div className="flex justify-center items-center font-roboto ">
      <div className="lg:w-[1320px] md:w-[80%] w-full  lg:p-6 p-3 bg-back-blue flex lg:flex-row flex-col-reverse  justify-between items-center lg:gap-3 gap-6 rounded" >
        <div className="pt-10 lg:w-1/2 w-full">
          <span className="text-white">FrontierDAO #DeSci</span>
          <h2 className="text-custom-ttlclr xl:text-5xl lg:text-[42px] text-3xl font-bold font-emoji xl:leading-[70px] lg:leading-[60px] leading-10 md:mt-8 mt-4">
            Publish your Scientific Research. IP as NFT. Science on the
            Blockchain.
          </h2>
          <p className="text-white font-barlow text-2xl">
            Scientific research published and peer reviewed on-chain. Option to
            crowdsource funding by minting your research paper/IP as a NFT.
          </p>
          <div className="flex justify-center items-center lg:mt-10 mt-5 mb-6">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] gap-3 !border-none focus:outline-none btn-lowercase"
            >
              <span className="text-xl">Explore</span>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-auto rounded flex justify-center items-center">
          <img
            src={FrontierIntroductionImage}
            className="w-full h-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontierIntroduction;
