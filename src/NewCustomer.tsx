import { FaUser, FaCommentDots, FaPhone } from "react-icons/fa";
import "./NewCustomer.css"; 
import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";

const customers = [
  {
    name: "Lewis S. Cunningham",
    role: "CEO Excerpt",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Lewis S. Cunningham",
    role: "CEO Excerpt",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Lewis S. Cunningham",
    role: "CEO Excerpt",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Lewis S. Cunningham",
    role: "CEO Excerpt",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Lewis S. Cunningham",
    role: "CEO Excerpt",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Lewis S. Cunningham",
    role: "CEO Excerpt",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const NewCustomer = () => {
  return (
    <Card className="new-customer-card">
      <CardContent>
        <div className="header">
          <Typography variant="h6" className="title">
            New Customer
          </Typography>
          <Button className="see-all-button">See all →</Button>
        </div>
        <div className="customer-list">
          {customers.map((customer, index) => (
            <div key={index} className="customer-item">
              <Avatar src={customer.img} className="avatar" />
              <div className="customer-info">
                <Typography variant="body1" className="customer-name">
                  {customer.name}
                </Typography>
                <Typography variant="body2" className="customer-role">
                  {customer.role}
                </Typography>
              </div>
              <div className="customer-actions">
                <FaUser className="icon" />
                <FaCommentDots className="icon" />
                <FaPhone className="icon" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewCustomer;