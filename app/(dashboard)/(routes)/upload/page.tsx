"use client"
import UploadForm from "@/components/upload/UploadForm"

const page = () => {
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center">Start <strong className="text-primary">Uploading</strong> File and <strong className="text-primary"> Share </strong>it</h2>
      <UploadForm />
    </div>
  )
}

export default page
