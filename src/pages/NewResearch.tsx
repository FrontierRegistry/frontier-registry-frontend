import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function NewResearch() {
  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto 2xl:w-3/5 w-4/5 py-12">
        <Card color="transparent" shadow={false}>
          <Typography variant="h2"  className="text-custom-blue">
            New Research
          </Typography>
          <form className="mt-8 mb-2 max-w-screen-2xl sm:w-full">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h4" color="blue-gray" className="-mb-3">
                Title
              </Typography>
              <Input
                size="lg"
                placeholder="On the Number of Primes Less Than a Given Magnitude"
                className=" focus:!border-blue-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h4" color="blue-gray" className="-mb-3">
                Description
              </Typography>
              <div className="w-full">
                <Textarea className="focus:!border-blue-400"/>
              </div>
              <Typography variant="h4" color="blue-gray" className="-mb-3">
                Keywords
              </Typography>
              <Input
                size="lg"
                placeholder="Artificial Intelligence, Education, ..."
                className=" focus:!border-blue-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <div className="font-[sans-serif]">
                <label className="font-semibold mb-2 block text-2xl text-blue-gray-900">
                  Upload file
                </label>
                <input
                  type="file"
                  className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
                />
                {/* <p className="text-xs text-gray-400 mt-2">DOC, PDF, PNG, JPG SVG, WEBP, and GIF are Allowed.</p> */}
              </div>
            </div>
            <Button
              className="mt-12 !border-none focus:outline-none text-xl"
              fullWidth
              color="blue"
              size="md"
              
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
