import { FrSetupData } from "../data/Data"

const FrontierSetup = () => {
  return (
    <div className="setup-component">
      <div className="header text-center font-bold text-lg my-16">
        Easy setup. Less than 5 minutes.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 2xl:px-24 px-6">
        {FrSetupData.map((item, key) => (
          <div key={key} className="item-wrapper bg-white p-4 rounded-lg shadow-md">
            <div className="item text-center flex flex-col justify-center items-center">
              <div className="text-5xl mb-4" style={{ color: item.color }}>
                {item.icon}
              </div>
              <div className="title font-semibold text-xl mb-2">
                {item.title}
              </div>
              <div className="description text-gray-600">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontierSetup;
