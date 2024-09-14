import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { pinata } from "../core/pinata";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { PinResponse } from "pinata-web3";
import { registerNFT } from "../core/stellar-core";
import kit from "../core/stellar-wallets-kit";
import {
  Alert
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

import type { CertificateData } from "../core/stellar-core";

function NewResearch() {

  const { connectionState } = useSelector((store: any) => store.user);

  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [Keywords, setKeywords] = useState<string>("")
  const [selectedFile, setSelectedFile] = useState();
  const [IpfsHash, setIpfsHash] = useState<string>("https://ipfs.io/ipfs/bafybeidj4k47xrpezz2nacu77fmwruvgz3xda6og56hydfec3kl5kp5i7q");

  const [registering, setRegistering] = useState(false);

  useEffect(() => {
    if (title !== "" && description !== "" && Keywords !== "" && IpfsHash != "") {
      registerNFT(kit, connectionState.publicKey, title, description, Keywords, IpfsHash);
    }
  }, [IpfsHash])

  useEffect(() => {
    if (registering) {
      // handleSubmission();
      if (title !== "" && description !== "" && Keywords !== "" && IpfsHash != "") {
        sendTransaction();
      }
    }
  }, [registering])

  const sendTransaction = async () => {
    try {
      let certificateData: CertificateData = await registerNFT(kit, connectionState.publicKey, title, description, Keywords, IpfsHash);
      console.log(certificateData)
    } catch (error) {
      console.log(error)
    }
  }

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    try {
      if (selectedFile) {
        const upload: PinResponse = await pinata.upload.file(selectedFile)
        console.log(upload.IpfsHash)
        setIpfsHash(upload.IpfsHash);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const LoadingIcon = () => {
    return (
      <svg
        fill="rgb(33 150 243)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.349 26.35"
        className="h-6 w-6"
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

  const Icon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgb(33 150 243)"
        className="h-7 w-7"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto 2xl:w-3/5 w-4/5 py-12">
        <section>
          <label className="text-custom-blue text-4xl font-bold">
            New Research
          </label>
          <div className="mt-12 mb-12 max-w-screen-2xl sm:w-full">
            <div className="mb-1 flex flex-col gap-6">
              <label className="mt-3 text-2xl font-bold">
                Title
              </label>
              <input
                placeholder="Artificial Intelligence, Education, ..."
                className=" focus:!border-blue-400 focus:outline-none px-3 py-2 border-gray-400 border-[1px] rounded-md"
                onChange={e => { setTitle(e.target.value) }}
                value={title}
              />
              <label className="mt-3 text-2xl font-bold">
                Description
              </label>
              <div className="w-full">
                <textarea className="border-gray-400 focus:!border-blue-400 focus:outline-none border-[1px] rounded-md w-full h-16 px-2 py-2" onChange={e => { setDescription(e.target.value) }} value={description} />
              </div>
              <label className="mt-3 text-2xl font-bold">
                Keywords
              </label>
              <input
                placeholder="Artificial Intelligence, Education, ..."
                className=" focus:!border-blue-400 focus:outline-none px-3 py-2 border-gray-400 border-[1px] rounded-md"
                onChange={e => { setKeywords(e.target.value) }}
                value={Keywords}
              />

              <div className="font-[sans-serif]">
                <label className="font-semibold mb-2 block text-2xl text-blue-gray-900">
                  Upload file
                </label>
                <input
                  type="file"
                  className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
                  onChange={changeHandler}
                />
                {/* <p className="text-xs text-gray-400 mt-2">DOC, PDF, PNG, JPG SVG, WEBP, and GIF are Allowed.</p> */}
              </div>
            </div>
            <button
              type="button"
              className="mt-12 !border-none focus:outline-none text-xl w-full bg-blue-400 text-gray-50"
              onClick={() => { setRegistering(true) }}
            >
              Register
            </button>
          </div>
        </section>
      </div>
      <Footer />
      <div className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm z-50 hidden">
        <div className="relative bg-white m-4 rounded-lg shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%] p-4">

          <div className="items-center shrink-0 p-4 text-blue-gray-900 antialiased font-sans text-2xl font-semibold leading-snug relative m-0 block">
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              Saving your research data on chain
            </h4>
            <p className="block antialiased font-sans text-base leading-relaxed mt-1 font-normal text-gray-600">
              Please wait while we process your request. You can track the upload
              progress below.
            </p>
            <button
              className="align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 !absolute right-3.5 top-3.5"
              onClick={() => { }}
            >
              <XMarkIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
            </button>
          </div>
          <div className="relative p-4 text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed">
            <div className="w-full text-center">


              <svg className="hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 206" preserveAspectRatio="none">
                <path className="middle" d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z" />
                <path className="outer" d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z" />
              </svg>

            </div>
            <div className="flex">
              <Alert
                icon={<Icon />}
                className="rounded-none  border-[#2ec946] bg-white font-medium text-black flex items-center"
              >
                Uploading research data to IFPS
              </Alert>
            </div>
            <div className="flex gap-16">
              <Alert
                icon={<Icon />}
                className="rounded-none  border-[#2ec946] bg-white font-medium text-black flex items-center"
              >
                Executing the onchain transaction
              </Alert>
            </div>
            <div className="flex gap-16">
              <Alert
                icon={<Icon />}
                className="rounded-none  border-[#2ec946] bg-white font-medium text-black flex items-center"
              >
                Generating certification document
              </Alert>
            </div>
            <div className="flex gap-16">
              <Alert
                icon={<LoadingIcon />}
                className="rounded-none  border-[#2ec946] bg-white font-medium text-black flex items-center"
              >
                A simple alert for showing message.
              </Alert>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NewResearch;
