import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Dynamically import react-pdf components to avoid SSR issues
const Document = dynamic(() => import("react-pdf").then((mod) => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), { ssr: false });
const pdfjsPromise = import("react-pdf").then((mod) => mod.pdfjs);

const ResearchPaper = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        pdfjsPromise.then((pdfjs) => {
            pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">Research Paper</h1>
            <Document
                file="/researchpaper.pdf" // Ensure this PDF exists in the "public" folder
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className="border rounded shadow-md bg-white p-4"
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div className="flex mt-4 mb-4">
                <button
                    className="px-4 py-2 mx-2 bg-red-500 text-white rounded"
                    disabled={pageNumber <= 1}
                    onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                >
                    Previous
                </button>
                <span className="px-4 py-2">{`Page ${pageNumber} of ${numPages || "..."}`}</span>
                <button
                    className="px-4 py-2 mx-2 bg-green-500 text-white rounded"
                    disabled={pageNumber >= numPages}
                    onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
                >
                    Next
                </button>


            </div>
        </div>
    );
};

export default ResearchPaper;
