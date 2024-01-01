const AlertMsg = () => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 p-4 rounded relative mt-5"
      role="alert"
    >
      <strong className="font-bold">⚠️ Max File Size: 2MB!</strong>
      <span className="block sm:inline"> Please upload file less than 2MB.</span>
    </div>
  );
};

export default AlertMsg;
