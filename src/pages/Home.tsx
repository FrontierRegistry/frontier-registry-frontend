import React from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function Home() {

  return (
    <div className="flex flex-col items-center h-screen w-screen px-4">
      <Header />
      <div className="text-green-500">
        Home
      </div>
      <Footer />
    </div>
  );
}

export default Home;
