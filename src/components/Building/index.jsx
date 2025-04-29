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
  const {
    wirelessClients = {},
    wlcVersion,
    catalystVersion,
    timePeriod,
    infoCards = [],
  } = data || {};
  return (
    <div className="my-1 flex flex-col gap-2">
      <div className="flex">
        <div className="flex-1 flex gap-1">
          <div className="shadow-2xl shadow-gray-400  px-1 py-0.5 bg-gray-300">
            <div className="bg-green-600 text-white px-1 py-0.5">
              WLC Version: <span className="font-semibold">{wlcVersion}</span>
            </div>
          </div>
          <div className="shadow-2xl shadow-gray-400  px-1 py-0.5 bg-gray-300">
            <div className="bg-green-600 text-white px-1 py-0.5">
              Catalyst Version:{" "}
              <span className="font-semibold">{catalystVersion}</span>
            </div>
          </div>
        </div>
        <div className="font-semibold">
          <span>Time Period </span>
          <span className="text-blue-500">{timePeriod}</span>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div>Charts</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {infoCards?.map(({ label, value, health, valueColor }) => {
            return (
              <div className=" shadow-2xl bg-white p-2 rounded-md">
                <div>{label}</div>
                <div
                  className="text-center font-semibold text-4xl text-blue-400"
                  style={{ color: valueColor }}
                >
                  {value}
                </div>
                <div className="text-center font-semibold text-blue-400">
                  {health}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="shadow-2xl p-2 bg-white ">
        <div className="text-2xl font-medium">Wireless Clients</div>
        <div className="px-2 flex justify-between items-end text-gray-500 font-semibold">
          <div>
            <span className="mx-1">LATEST</span>
            <span className="mx-1 text-amber-900 text-5xl">
              {wirelessClients?.lateast}
            </span>
            <span className="mx-1">{wirelessClients?.health}</span>
          </div>
          <div className="mx-1">TOTAL: {wirelessClients.total || 0}</div>
          <div className="mx-1">|</div>
          <div className="mx-1">Active: {wirelessClients.active || 0}</div>
          <div className="mx-1">|</div>
          <div className="mx-1">Inactive: {wirelessClients.inActive || 0}</div>
          <div className="mx-1">|</div>
          <div className="mx-1">New: {wirelessClients.new || 0}</div>
        </div>
      </div>
    </div>
  );
};

export default Building;
