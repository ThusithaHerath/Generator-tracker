import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { geocode, RequestType } from "react-geocode";
import { Spinner } from "@material-tailwind/react";

import { db } from "../../firebase.init";

import { Navbar } from "../../Components";

export default function Dashboard() {

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col">
        <div className="flex flex-row gap-4 justify-center mt-4 px-2">
          <div className="bg-white drop-shadow-md h-36 w-52 rounded-lg flex items-center justify-center">
            <a href="/mapView">GPS Tracker 1</a>
          </div>
        </div>
      </div>
    </>
  );
}
