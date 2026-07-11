import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Cart.css";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Container
} from "@mui/material";

const Cart = () => {
  const location = useLocation();
  const cartData = location.state;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔥 FINAL ORDER FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Cart Data:", cartData);
    console.log("User Data:", formData);

    if (!cartData) {
      alert("No product selected ❌");
      return;
    }

    const finalOrder = {
      // 🛒 Cart / Product Data
      paperSize: cartData.paperSize,
      faces: cartData.faces,
      isFramed: cartData.isFramed,
      totalPrice: cartData.totalPrice,
      image: cartData.imagePreview,

      // 👤 User Details
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: formData.mobile,
      address: formData.address,

      // 🕒 Extra (useful for your business)
      createdAt: new Date()
    };

    try {
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(finalOrder)
      });

      const data = await res.text();
      console.log("Server Response:", data);

      alert("Order placed successfully ✅");

      // 🔄 Reset form after order
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        address: ""
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Error placing order ❌");
    }
  };

  return (
    <section id="cart">
      <div className="breadcrumbWrapper">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>

      <div className="cartWrapper">
        <Container maxWidth="lg">
          <Grid container spacing={4}>

            {/* 🛒 LEFT SIDE - CART DETAILS */}
            <Grid item xs={12} md={7}>
              <Paper elevation={3} sx={{ padding: 4, borderRadius: 3 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Your Cart Items
                </Typography>

                {cartData ? (
                  <>
                    <Typography><strong>Paper Size:</strong> {cartData.paperSize}</Typography>
                    <Typography><strong>Faces:</strong> {cartData.faces}</Typography>
                    <Typography><strong>Frame:</strong> {cartData.isFramed ? "Yes" : "No"}</Typography>

                    {cartData.imagePreview && (
                      <div style={{ marginTop: "1rem" }}>
                        <strong>Selected Image:</strong>
                        <br />
                        <img
                          src={cartData.imagePreview}
                          alt="Selected"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "300px",
                            marginTop: "0.5rem",
                            border: "1px solid #ccc",
                            borderRadius: "5px"
                          }}
                        />
                      </div>
                    )}

                    <Typography sx={{ mt: 2, fontWeight: 600 }}>
                      Total: ₹{cartData.totalPrice}
                    </Typography>
                  </>
                ) : (
                  <Typography color="text.secondary">
                    No items in cart.
                  </Typography>
                )}
              </Paper>
            </Grid>

            {/* 👤 RIGHT SIDE - USER FORM */}
            <Grid item xs={12} md={5}>
              <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Shipping Details
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        multiline
                        rows={3}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{
                          padding: "12px",
                          borderRadius: 2,
                          fontWeight: 600
                        }}
                      >
                        Place Order
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default Cart;