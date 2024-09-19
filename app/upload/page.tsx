"use client";
import React, { useState } from "react";
import {
  CldUploadWidget,
  CldImage,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  //   const handleSuccess = (result: CloudinaryUploadWidgetResults) => {
  //     console.log(result);
  //   };
  // console.log("Public ID:", publicId);
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="Image" />
      )}
      <CldUploadWidget
        uploadPreset="jc5vshcm"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
          // style:{

          // }
        }}
        onSuccess={(result, { widget }) => {
          console.log("Results: ", result);
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        // onQueuesEnd={(result, { widget }) => {
        //   widget.close();
        // }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
