import { useState } from "react";
import Card from "./";
import { Document, Page } from 'react-pdf';

const NftCard = (props: {
  title: string;
  description: string;
  keywords: string;
  image: string;
  download?: string;
  extra?: string;
}) => {
  const { title, description, keywords, image, extra } = props;
  const [pdfErr, setPdfErr] = useState(false);

  const [_, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    try {
      setNumPages(numPages);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          {!pdfErr ? <Document file={image} onLoadError={(_) => setPdfErr(true)} onLoadSuccess={onDocumentLoadSuccess} className="overflow-hidden h-48">
            <Page width={220} pageNumber={pageNumber} />
          </Document> : <img
            src={image}
            className="mb-3 h-full w-full rounded-md 3xl:h-full 3xl:w-full"
            alt=""
          />
          }
          {/* <button
            onClick={() => setHeart(!heart)}
            className="absolute right-3 top-3 flex items-center justify-center rounded-md bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-md text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-brand-500" />
              )}
            </div>
          </button> */}
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {description.slice(0, 100)}{"..."}
            </p>
          </div>

          <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              Keywords: {keywords}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;