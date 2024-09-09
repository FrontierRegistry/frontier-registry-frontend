import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function HomePage() {

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen px-4">
      <Header />
      Homepage
      <Footer />
    </div>
  );
}

export default HomePage;
