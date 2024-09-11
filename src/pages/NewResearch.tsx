import {
  Card,
  Input,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

function NewResearch() {
  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden px-4">
      <Header />
      <div className="mx-auto max-w-screen-md py-12">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            NewResearch
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Title
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Description
              </Typography>
              <div className="w-96">
                <Textarea />
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Keywords
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <div className="font-[sans-serif]">
                <label className="text-base font-semibold mb-2 block">Upload file</label>
                <input type="file"
                  className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
                <p className="text-xs text-gray-400 mt-2">DOC, PDF, PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
              </div>
            </div>
            <Button className="mt-6" fullWidth>
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
