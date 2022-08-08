import React from "react";
import NavbarOne from "../layout/Navbar";
import { useState } from "react";

function Edit() {
  const [upload, setUpload] = useState(0);

  console.log(upload);

  return (
    <>
      <NavbarOne />
      <div>
        <div className="flex bg-green-100 justify-center">
          <div className="flex flex-col bg-blue-100 px-4 py-5">
            <h1>Edit</h1>
            <h3>Upload Naskah ke Drive</h3>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setUpload(upload + 1)}
            >
              UPLOAD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
