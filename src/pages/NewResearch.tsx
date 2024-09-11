import React from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function NewResearch() {
  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto max-w-screen-md py-12">NewResearch</div>
      <Footer />
    </div>
  );
}

export default NewResearch;
