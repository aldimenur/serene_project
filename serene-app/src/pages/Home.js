import React from "react";
import { Link } from "react-router-dom";
import DrivePicker from "../component/DrivePicker";
import Navbar from "../layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="p-10 bg-green-100">
        <div className="flex flex-col justify-center w-auto align-middle">
          <div className="flex mt-3">
            <Link to="/home" replace="true">
              <button
                type="button"
                className="w-24 mx-4 btn btn-outline-primary"
              >
                HOME
              </button>
            </Link>
            <Link to="/edit" replace="true">
              <button type="button" className="w-24 btn btn-outline-primary">
                EDIT
              </button>
            </Link>
            <div className="px-4">
              <DrivePicker />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
