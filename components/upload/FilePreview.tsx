import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface FilePreviewProps {
  file: File;
  removeFile: () => void;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, removeFile }) => {
  return (
    <div className="flex items-center justify-between mt-5 border rounded-md p-2 border-green-200 gap-2">
      <div className="flex items-center p-2">
        <FaRegFileAlt size={50} className="text-green-500" />
        <div className="text-left ml-2">
          <h2 className="font-bold">{file?.name}</h2>
          <h2 className="text-[12px] text-gray-400 font-bold">
            {file?.type} / {(file?.size / 1024 / 1024).toFixed(2)}MB
          </h2>
        </div>
      </div>
      <IoClose className="text-red-500 cursor-pointer" size={40} onClick={()=>removeFile()}/>
    </div>
  );
};

export default FilePreview;
