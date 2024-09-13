import Header from "../layouts/header";
import Footer from "../layouts/footer";

function MyResearch() {
  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto max-w-screen-md py-12">MyResearch</div>
      <Footer />
    </div>
  );
}

export default MyResearch;
