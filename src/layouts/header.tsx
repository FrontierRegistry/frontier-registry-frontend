import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-2 px-1 flex justify-between items-center">
      <h1 className="text-md font-bold">Frontier registry</h1>
      <div className="flex items-center justify-end gap-3">
      </div>
    </header>
  );
};

export default Header;
