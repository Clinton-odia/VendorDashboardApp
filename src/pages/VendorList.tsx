import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../component/LoadingComponent";

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
    <div style={{ margin: "" }}>
      <ul>
        {data.map((vendor) => (
          <li key={vendor.id}>{vendor.name} </li>
        ))}
      </ul>
    </div>
  );
}
