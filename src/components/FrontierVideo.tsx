import React from "react";
import { Button } from "@material-tailwind/react";

const FrontierVideo = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div>
        <Button
          color="light-blue"
          variant="gradient"
          ripple={true}
          className="!border-none focus:outline-none btn-lowercase"
          size="lg"
        >
          <span className="text-xl">Explainer Video</span>
        </Button>
      </div>
      <div className="text-xl text-[#04121d] flex flex-col justify-center items-center font-bold mt-20">
        <p className="mb-2">#DeSci</p>
        <p className="mb-12">Decentralized Science</p>
        <p className="mb-12">Science As A Public Good</p>
      </div>
      <div>
        <Button
          color="light-blue"
          variant="gradient"
          ripple={true}
          className="!border-none focus:outline-none btn-lowercase bg-[#03b4c6]"
          size="lg"
        >
          <span className="text-xl">Publish Here</span>
        </Button>
      </div>
    </div>
  );
};

export default FrontierVideo;
