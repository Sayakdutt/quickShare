import { useState } from "react";
import AlertMsg from "./AlertMsg";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

interface UploadFormProps {
  uploadClick: () => void;
  progress: number | undefined;
}

const UploadForm = ({ uploadBtnClick, progress }: any) => {
  const [file, setFile] = useState<File | null>();
  const [errorMsg, setErrorMsg] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = event.target.files;
    if (fileList) {
      const files: File = fileList[0];
      console.log(files);
      if (files.size > 2000000) {
        setErrorMsg(true);
        console.warn("Please upload a file less than 2MB");

        toast.warn("⚠️ Please upload a file less than 2MB!", {
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      setErrorMsg(false);
      setFile(files);
    }
  };
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-lg cursor-pointer hover:bg-green-200">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 sm:text-lg md:text-sm text-green-500">
              <span className="font-semibold">Click to upload</span> or{" "}
              <strong className="text-primary">drag</strong> and{" "}
              <strong className="text-primary">drop</strong>
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (Max Size: 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {errorMsg ? <AlertMsg /> : null}

      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <button
          disabled={!file}
          className="p-2 bg-primary text-white w-[30%] rounded-full mt-5 hover:bg-green-400 disabled:bg-gray-400"
          onClick={() => uploadBtnClick(file)}
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default UploadForm;
