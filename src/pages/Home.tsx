import Header from "../layouts/header";
import Footer from "../layouts/footer";
import FrontierIntroduction from "../components/FrontierIntroduction";
import FrontierVideo from "../components/FrontierVideo";
import FrontierScientific from "../components/FrontierScientific";
import FrontierSetup from "../components/FrontierSetup";
import FrontierResource from "../components/FrontierResource";

function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto py-12 w-full">
        <FrontierIntroduction />
        <FrontierVideo />
        <FrontierScientific />
        <FrontierSetup />
        <FrontierResource />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
