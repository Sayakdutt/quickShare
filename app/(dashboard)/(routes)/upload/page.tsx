"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import UploadForm from "@/components/upload/UploadForm";

import { app } from "@/firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

import { useUser } from "@clerk/nextjs";
import { generateRandomString } from "@/utils/generateRandomString";
import { useRouter } from "next/navigation";

const page = () => {
  const { user } = useUser();

  const [progress, setProgress] = useState<number>(0);
  const [uploadCompleted, setUploadCompleted] = useState<boolean>(false);
  const [fileDocId, setFileDocId] = useState<string>("");

  const router = useRouter();
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage(app);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const uploadFile = (file: any) => {
    const metadata = {
      contentType: file.type,
    };

    // Create a storage reference from our storage service
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on("state_changed", (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is" + progress + "% done");

      setProgress(progress);

      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveInfo(file, downloadURL);
        });
    });
  };

  const saveInfo = async (file: any, fileUrl: string) => {
    const docId = generateRandomString(6);
    // Add a new document in collection "uploadedFile"
    await setDoc(doc(db, "uploadedFile", docId), {
      id: docId,
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      fileUrl: fileUrl,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      password: "",
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
    });
    setFileDocId(docId);
  };

  useEffect(() => {
    console.log("trigger");
    progress == 100 &&
      setTimeout(() => {
        setUploadCompleted(true);
      }, 2000);
  }, [progress == 100]);

  useEffect(() => {
    uploadCompleted &&
      setTimeout(() => {
        setUploadCompleted(false);
        router.push("/file-preview/" + fileDocId);
      }, 3000);
    
  }, [uploadCompleted == true]);

  return (
    <div className="p-5 px-8 md:px-28">
      {!uploadCompleted ? (
        <div>
          <h2 className="text-[20px] text-center">
            Start <strong className="text-primary">Uploading</strong> File and{" "}
            <strong className="text-primary"> Share </strong>it
          </h2>
          <UploadForm
            uploadBtnClick={(file: any) => uploadFile(file)}
            progress={progress}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center mt-3">
          {" "}
          <Image
            src="/Success.gif"
            alt="Success image"
            width={100}
            height={100}
          />
          <h2 className="text-2xl">
            File <strong className="text-indigo-500">Uploaded</strong>{" "}
            Succesfully
          </h2>
        </div>
      )}
    </div>
  );
};

export default page;
