import "../styles/VendorList.css";
interface data {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export default function VendorCard({ name, email, phone, company }: data) {
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
        <button className="btn-vendor">View Detail</button>
      </div>
    </div>
  );
}
