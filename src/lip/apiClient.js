import axios from "axios";
import { BASE_URL } from "../constants/urlConstant";

const apiClient = axios.create({ baseURL: BASE_URL });

const dummyJSON = {
  wlcVersion: "17.15.3",
  catalystVersion: "3.1.3",
  timePeriod: "Current - 1d-5d-1m",
  networkHealth: "96% healthy",
  wirelessClients: {
    lateast: "38%",
    health: "Healthy",
    total: "179,990",
    active: "179,990",
    inActive: "0",
    new: 0,
  },
  infoCards: [
    {
      label: "# Radio Crash",
      value: "5",
      valueColor: "green",
      health: "Below Average",
    },
    {
      label: "Roaming latency",
      value: "10ms",
      valueColor: "green",
      health: "Below Average",
    },
    {
      label: "# Clients",
      value: "72",
      health: "Average",
    },
    {
      label: "# Concurrent Clients",
      value: "12",

      health: "Below Threshold",
    },
  ],
};

apiClient.interceptors.response.use(
  (response) => {
    return dummyJSON;
  },
  (error) => {
    return dummyJSON;
  }
);
export default apiClient;
