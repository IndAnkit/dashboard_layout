import apiClient from "@/lip/apiClient";
import React, { useEffect, useState } from "react";

const Building = ({ networkId }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    apiClient
      .post("", { networkId })
      .then((_data) => {
        console.log("_data", _data);
        setData(_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [networkId]);
  if (!data) {
    return <div>Loader...</div>;
  }
  const { wlcVersion, catalystVersion, timePeriod } = {
    wlcVersion: "17.15.3",
    catalystVersion: "3.1.3",
    timePeriod: "Current - 1d-5d-1m",
  };
  return (
    <div className="my-1">
      <div className="flex">
        <div className="flex-1 flex gap-1">
          <div className="drop-shadow-2xl drop-shadow-gray-400  px-1 py-0.5 bg-gray-300">
            <div className="bg-green-600 text-white px-1 py-0.5">
              WLC Version: <span className="font-semibold">{wlcVersion}</span>
            </div>
          </div>
          <div className="drop-shadow-2xl drop-shadow-gray-400  px-1 py-0.5 bg-gray-300">
            <div className="bg-green-600 text-white px-1 py-0.5">
              Catalyst Version:{" "}
              <span className="font-semibold">{catalystVersion}</span>
            </div>
          </div>
        </div>
        <div>
          <span>Time Period</span>
          <span>{timePeriod}</span>
        </div>
      </div>
    </div>
  );
};

export default Building;
