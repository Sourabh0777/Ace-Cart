import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import LoginDialog from "../login/LoginDialog";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";
import { removeFromCart } from "../../redux/actions/cartActions";
import { removeCartItems, saveOrderDetails } from "../../service/api";

import toast from "react-hot-toast";

const DeliveryRequest = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // styling submit button
  const SubmitButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    font-weight: 600;
    :hover {
      background: #fb641b;
    }
  `;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    if (localStorage.getItem("loggedinUser")) {
      emailjs
        .sendForm(
          "service_dlzs3xt",
          "template_00ryjhh",
          form.current,
          "TYA92gMvslX9TZbwy"
        )
        .then(
          (result) => {
            handleSuccessfulSubmission();
          },
          (error) => {
            console.log(error.text);
            setLoading(false); // Set loading to false on error
          }
        );
    } else {
      setOpen(true);
      setLoading(false); // Set loading to false when user is not logged in
    }
  };

  const navigate = useNavigate();

  // getting items from redux store.
  const { cartItems } = useSelector((state) => state.cart);

  const handleSuccessfulSubmission = async () => {
    try {
      for (let i = 0; i < cartItems.length; i++) {
        await saveOrderDetails(cartItems[i]);
      }
      removeFromCartFun();
      toast.success("Order Placed Successfully.");
      navigate("/orders/details");
    } catch (error) {
      toast.error("Something went wrong while placing the order. Please try again.");
      console.log("Front delivery request error", error);
    }
  };

  const dispatch = useDispatch();

  const removeFromCartFun = async () => {
    try {
      for (let i = 0; i < cartItems.length; i++) {
        await removeCartItems(cartItems[i].id);
        dispatch(removeFromCart(cartItems[i].id));
      }
    } catch (error) {
      console.log("Error removing cart items", error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("loggedinUser") || cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  const handleDemoButton = async () => {
    setTimeout(async () => {
      try {
        for (let i = 0; i < cartItems.length; i++) {
          await saveOrderDetails(cartItems[i]);
        }
        removeFromCartFun();
        toast.success("Order Placed Successfully.");
        navigate("/orders/details");
      } catch (error) {
        console.log("Front delivery request error", error);
      }
    }, 1000);
  };

  return (
    <div style={{ padding: 20 }}>
      <h5 style={{ margin: "auto", width: "500px" }}>
        Please fill in the details to get your order delivered.
      </h5>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          margin: "auto",
        }}
      >
        <TextField
          id="outlined-basic"
          name="user_name"
          variant="filled"
          required
          style={{ marginTop: 20 }}
          value={localStorage.getItem("loggedinUser")}
          readOnly
        />

        <TextField
          id="outlined-basic"
          name="user_email"
          type="email"
          variant="outlined"
          label="Enter valid Email"
          style={{ marginTop: 20 }}
          required
        />

        <TextField
          id="outlined-basic"
          name="user_phone"
          variant="outlined"
          label="Enter Phone Number"
          type="number"
          required
          style={{ marginTop: 20 }}
        />

        <TextField
          id="outlined-basic"
          name="user_address"
          variant="outlined"
          label="Enter Shipping Address with Pincode"
          style={{ marginTop: 20 }}
          required
        />

        <Typography style={{ marginTop: 20 }}>
          Products ({cartItems.length})
        </Typography>
        <TextField
          style={{ marginTop: 2 }}
          name="Your products"
          id="outlined-basic"
          variant="filled"
          value={
            cartItems &&
            cartItems.map((item) => {
              return item.title.longTitle + "\n";
            })
          }
          multiline={true}
          rows={3}
          readOnly
        ></TextField>

        <SubmitButton style={{ marginTop: 20 }} type="submit">
          {loading ? <CircularProgress color="inherit"/> : "Place Order"}
        </SubmitButton>

        {/* {loading && (
          <h6 style={{ textAlign: "center" }}>Your order has been placed</h6>
        )} */}
      </form>
      <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
    </div>
  );
};

export default DeliveryRequest;
