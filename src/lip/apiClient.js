import axios from "axios";
import { BASE_URL } from "../constants/urlConstant";

const apiClient = axios.create({ url: BASE_URL });

const dummyJSON = {
  hostName: "10-195-144-216.etcd.kube-system.svc.cluster.local",
  version: "1",
  kpis: {
    cpu: {
      utilization: "9.48",
      units: "percent",
    },
    memory: {
      utilization: "69.51",
      units: "percent",
    },
    "network tx_rate": {
      utilization: "1483.26",
      units: "kbps",
    },
    "network rx_rate": {
      utilization: "1821.24",
      units: "kbps",
    },
  },
};

apiClient.interceptors.response.use(
  (_) => {
    return Promise.resolve(dummyJSON);
  },
  (_) => {
    return Promise.resolve(dummyJSON);
  }
);
export default apiClient;
