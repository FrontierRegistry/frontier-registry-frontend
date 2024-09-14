import Header from "../layouts/header";
import Footer from "../layouts/footer";
import kit from "../core/stellar-wallets-kit";
import { getResearchByUser } from "../core/stellar-core";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function MyResearch() {

  const { connectionState } = useSelector((store: any) => store.user);
  const [loading, setLoading] = useState(false);

  const getResearch = async () => {
    let res = await getResearchByUser(kit, connectionState.publicKey);
    console.log(res)
  }

  useEffect(() => {
    if (loading === true) {
      getResearch();
    }
  }, [loading])

  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto max-w-screen-md py-12">MyResearch</div>
      <Footer />
    </div>
  );
}

export default MyResearch;
