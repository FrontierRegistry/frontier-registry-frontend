import React from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function MyResearch() {

  return (
    <div className="flex flex-col items-center h-screen w-screen px-4 overflow-hidden">
      <Header />
      <div className="mx-auto max-w-screen-md py-12">
        MyResearch
      </div>
      <Footer />
    </div>
  );
}

export default MyResearch;
