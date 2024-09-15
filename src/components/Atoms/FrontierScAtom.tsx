import React from "react";
interface IFrScProps {
  title: string;
  imgUrl: string;
  content: string;
}

const FrontierScAtom: React.FC<IFrScProps> = ({ title, imgUrl, content }) => {
  return (
    <div className="w-[400px] h-[550px] mt-16">
      <div>
        <img
          src={imgUrl}
          alt={imgUrl}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="bg-[#808080] h-[250px] flex px-4 gap-3 pt-5 items-center flex-col">
        <h3 className="text-white text-2xl">{title}</h3>
        <p className="text-xl text-custom-ttlclr line-clamp-2">{content}</p>
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none border-white hover:border-custom-ttlclr mt-2 focus:outline-none btn-lowercase bg-[#808080] text-white hover:text-custom-ttlclr h-10 flex justify-center items-center"
        >
          <span className="text-xl ">Live</span>
        </button>
      </div>
    </div>
  );
};

export default FrontierScAtom;
