import React from "react";

interface IFrScProps {
  imgUrl: string;
  content: string;
}

const FrontierResAtom: React.FC<IFrScProps> = ({ imgUrl, content }) => {
  return (
    <div className="w-[300px] h-[500px] mt-16">
      <div>
        <img
          src={imgUrl}
          alt={imgUrl}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="bg-white h-auto flex px-4  pt-5 items-center flex-col border-black border-solid">
        <p className="text-xl text-custom-ttlclr line-clamp-2">{content}</p>
      </div>
    </div>
  );
};

export default FrontierResAtom;
