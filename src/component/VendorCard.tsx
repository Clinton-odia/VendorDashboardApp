import { Link } from "react-router";
import "../styles/VendorList.css";

interface data {
  vendorId: string | number;
  name: string;
  email: string;
  phone: string;
  company: string;
}

export default function VendorCard({
  vendorId,
  name,
  email,
  phone,
  company,
}: data) {
  console.log(vendorId);
  return (
    <div className="card-container">
      <div className="title-container">
        <h2 className="card-title">{name}</h2>
      </div>
      <div className="vendor-info">
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        <p>Company:{company}</p>
      </div>
      <div>
        <Link to={`/vendor/${vendorId}`}>
          <button className="btn-vendor">View Detail</button>
        </Link>
      </div>
      ;
    </div>
  );
}
