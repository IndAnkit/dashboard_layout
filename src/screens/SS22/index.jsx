import { useEffect, useState } from "react";
import apiClient from "../../lip/apiClient";
import StyledTabs from "@/components/StyledTabs";

const SS22 = ({ networkId = 22 }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    apiClient
      .get("")
      .then((_data) => {
        console.log("_data", _data);
        setData(_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) {
    return <div>Loader...</div>;
  }
  const { kpis } = data || {};
  return (
    <div>
      <StyledTabs />
    </div>
  );
};

export default SS22;
