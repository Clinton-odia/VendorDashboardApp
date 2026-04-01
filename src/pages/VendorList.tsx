import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../component/LoadingComponent";
import VendorCard from "../component/VendorCard";
import "../styles/VendorList.css";
export default function VendorList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
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
  const handleChange = (event) => {
    const { value } = event?.target;
    setSearch(() => value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const filterVendor = data.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h1 className="dashboard-title">Vendor Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search vendor"
          name="search"
          onChange={handleChange}
          className="search"
        />
      </form>
      {search != "" ? (
        <div className="vendor-container">
          {filterVendor.map((vendor) => (
            <VendorCard
              vendorId={vendor.id}
              key={vendor.id}
              name={vendor.name}
              email={vendor.email}
              phone={vendor.phone}
              company={vendor.company.name}
            />
          ))}
        </div>
      ) : (
        <div className="vendor-container">
          {data.map((vendor) => (
            <VendorCard
              vendorId={vendor.id}
              key={vendor.id}
              name={vendor.name}
              email={vendor.email}
              phone={vendor.phone}
              company={vendor.company.name}
            />
          ))}
        </div>
      )}
    </>
  );
}
