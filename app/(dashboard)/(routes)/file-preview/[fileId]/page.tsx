"use client";

import React, { useEffect, useState } from "react";

import { app } from "@/firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const page = ({ params }: any) => {

  const [fileInfo,setFileInfo] = useState<any>();
  const db = getFirestore(app);
  useEffect(() => {
    console.log(params?.fileId);
    params?.fileId && getFileInfo();
  }, []);
  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", params?.fileId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document Data", docSnap.data());
      setFileInfo(docSnap.data());
    } else {
      console.log("No such Document");
    }
  };
  return <div>page {params?.fileId}</div>;
};
export default page;
