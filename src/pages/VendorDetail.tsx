import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../component/LoadingComponent";
import "../styles/VendorDetail.css";

function VendorDetail() {
  const [vendorData, setVendorData] = useState("");
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const BASE_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
        const response = await axios.get(BASE_URL);
        const data = response.data;
        // console.log(data);
        setVendorData(() => data);
      } catch (error) {
        console.log("the error is..." + error);
      } finally {
        setLoader(() => false);
      }
    }
    fetchData();
  }, [id]);
  if (loader) {
    return <Loader />;
  }
  return (
    <div className="VendorDetail">
      <h1>Profile: {vendorData.name}</h1>
      <p>Email:{vendorData.email}</p>
      <p>Phone: {vendorData.phone}</p>
      <p>Website: {vendorData.website}</p>
      <p>Company:{vendorData.company.name}</p>
      <p>
        Address: {vendorData.address.street} {vendorData.address.city}
      </p>
    </div>
  );
}

export default VendorDetail;
