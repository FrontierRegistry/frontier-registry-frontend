import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import { pinata } from "../core/pinata";
import { useEffect, useState } from "react";

function NewResearch() {

  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [Keywords, setKeywords] = useState<string>("")
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    try {
      if (selectedFile) {
        const upload = await pinata.upload.file(selectedFile)
        console.log(upload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto 2xl:w-3/5 w-4/5 py-12">
        <Card color="transparent" shadow={false}>
          <Typography variant="h2" className="text-custom-blue">
            New Research
          </Typography>
          <form className="mt-12 mb-12 max-w-screen-2xl sm:w-full">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h4" color="blue-gray" className="mt-3">
                Title
              </Typography>
              <Input
                size="lg"
                placeholder="On the Number of Primes Less Than a Given Magnitude"
                className=" focus:!border-blue-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={e => { setTitle(e.target.value) }}
                value={title}
              />
              <Typography variant="h4" color="blue-gray" className="mt-3">
                Description
              </Typography>
              <div className="w-full">
                <textarea className="border-gray-400 focus:!border-blue-400 focus:outline-none border-[1px] rounded-md w-full px-2 py-2" onChange={e => { setDescription(e.target.value) }} value={description} />
              </div>
              <Typography variant="h4" color="blue-gray" className="mt-3">
                Keywords
              </Typography>
              <Input
                size="lg"
                placeholder="Artificial Intelligence, Education, ..."
                className=" focus:!border-blue-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
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
            <Button
              className="mt-12 !border-none focus:outline-none text-xl"
              fullWidth
              color="blue"
              size="md"
              onClick={handleSubmission}
            >
              Register
            </Button>
          </form>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default NewResearch;
