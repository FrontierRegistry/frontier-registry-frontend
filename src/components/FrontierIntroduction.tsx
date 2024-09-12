import FrontierIntroductionImage from "../assets/images/FrontierRegistryBlue.jpg";
import { Button } from "@material-tailwind/react";  

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
            <Button
              color="blue"
              variant="gradient"
              ripple={true}
              className="!border-none focus:outline-none btn-lowercase "
              size="lg"
            >
              <span className="text-xl">Explore</span>
            </Button>
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
