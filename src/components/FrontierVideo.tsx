import { Link } from "react-router-dom";


const FrontierVideo = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div>
        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-gradient-to-tr from-light-blue-600 to-light-blue-400 text-white shadow-md shadow-light-blue-500/20 hover:shadow-lg hover:shadow-light-blue-500/40 active:opacity-[0.85] gap-3 !border-none focus:outline-none btn-lowercase">
          <span className="text-xl">Explainer Video</span>
        </button>
      </div>
      <div className="text-xl text-[#04121d] flex flex-col justify-center items-center font-bold mt-20">
        <p className="mb-2">#DeSci</p>
        <p className="mb-12">Decentralized Science</p>
        <p className="mb-12">Science As A Public Good</p>
      </div>
      <div>
        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-gradient-to-tr from-light-blue-600 to-light-blue-400 text-white shadow-md shadow-light-blue-500/20 hover:shadow-lg hover:shadow-light-blue-500/40 active:opacity-[0.85] gap-3 !border-none focus:outline-none btn-lowercase">
          <Link to="/newresearch">
            <span className="text-xl text-white">Publish Here</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FrontierVideo;
