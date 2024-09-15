import Header from "../layouts/header";
import Footer from "../layouts/footer";
import kit from "../core/stellar-wallets-kit";
import { getResearchByUser } from "../core/stellar-core";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NftCard from "../components/card/NftCard";

import type { Certificate } from "../core/stellar-core";

function MyResearch() {

  const { connectionState } = useSelector((store: any) => store.user);
  const [loading, setLoading] = useState(false);
  const [nftData, setNftData] = useState<null | Array<Certificate>>(null)

  const getResearch = async () => {
    let res = await getResearchByUser(kit, connectionState.publicKey);
    setLoading(false)
    setNftData(res);
  }

  useEffect(() => {
    if (loading === true) {
      getResearch();
    }
  }, [loading])

  useEffect(() => {
    setLoading(true);
  }, [])

  const LoadingIcon = () => {
    return (
      <svg
        fill="rgb(33 150 243)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.349 26.35"
        className="h-12 w-12 i-rotate"
      >
        <g>
          <g>
            <circle cx="13.792" cy="3.082" r="3.082" />
            <circle cx="13.792" cy="24.501" r="1.849" />
            <circle cx="6.219" cy="6.218" r="2.774" />
            <circle cx="21.365" cy="21.363" r="1.541" />
            <circle cx="3.082" cy="13.792" r="2.465" />
            <circle cx="24.501" cy="13.791" r="1.232" />
            <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
			C6.902,18.996,5.537,18.988,4.694,19.84z"/>
            <circle cx="21.364" cy="6.218" r="0.924" />
          </g>
        </g>
      </svg>
    )
  }

  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto max-w-screen-2xl py-12">
        {loading ? <div className="flex gap-2 items-center text-xl">
          <LoadingIcon />
          Loading...
        </div> :
          nftData?.map((_, idx) => (
            <div key={idx} className="z-20 grid grid-cols-1 gap-5 md:grid-cols-5 mt-4">
              {nftData[idx * 5] &&
                <NftCard
                  title={nftData[idx * 5]?.title}
                  description={nftData[idx * 5]?.description}
                  keywords={nftData[idx * 5]?.keywords}
                  image={nftData[idx * 5]?.uri}
                />}
              {nftData[idx * 5 + 1] &&
                <NftCard
                  title={nftData[idx * 5 + 1]?.title}
                  description={nftData[idx * 5 + 1]?.description}
                  keywords={nftData[idx * 5 + 1]?.keywords}
                  image={nftData[idx * 5 + 1]?.uri}
                />
              }
              {nftData[idx * 5 + 2] &&
                <NftCard
                  title={nftData[idx * 5 + 2]?.title}
                  description={nftData[idx * 5 + 2]?.description}
                  keywords={nftData[idx * 5 + 2]?.keywords}
                  image={nftData[idx * 5 + 2]?.uri}
                />
              }
              {nftData[idx * 5 + 3] &&
                <NftCard
                  title={nftData[idx * 5 + 3]?.title}
                  description={nftData[idx * 5 + 3]?.description}
                  keywords={nftData[idx * 5 + 3]?.keywords}
                  image={nftData[idx * 5 + 3]?.uri}
                />}
              {nftData[idx * 5 + 4] &&
                <NftCard
                  title={nftData[idx * 5 + 4]?.title}
                  description={nftData[idx * 5 + 4]?.description}
                  keywords={nftData[idx * 5 + 4]?.keywords}
                  image={nftData[idx * 5 + 4]?.uri}
                />}
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default MyResearch;
