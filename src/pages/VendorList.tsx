import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../component/LoadingComponent";
import VendorCard from "../component/VendorCard";
import "../styles/VendorList.css";
export default function VendorList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };
    fetchVendors();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="vendor-container">
      {data.map((vendor) => (
        <VendorCard
          key={vendor.id}
          name={vendor.name}
          email={vendor.email}
          phone={vendor.phone}
          company={vendor.company.name}
        />
      ))}
    </div>
  );
}
