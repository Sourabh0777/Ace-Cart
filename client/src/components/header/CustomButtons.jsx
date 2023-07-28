import { Box, Button, Typography, styled, Badge } from "@mui/material";
import LoginDialog from "../login/LoginDialog";

// use state : stores values
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Profile from "./Profile";

const BoxWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > button,
  & > p,
  & > div {
    margin-left: 25px;
  }
`;

const LoginButton = styled(Button)`
  color: #000;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  :hover {
    background: #fff;
  }
`;

const MyOrders = styled(Box)`
  font-weight: 600;
  cursor: pointer;
  color: #000;
`;

const Cart = styled(ShoppingCartIcon)`
  cursor: pointer;
  vertical-align: middle;
  color: #000;
`;

const NavigateCart = styled(Link)`
  display: flex;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openDialog = () => {
    setOpen(true);
  };

  const navigate = useNavigate();
  const handleMyOrders = () => {
    navigate("/orders/details");
  };

  return (
    <BoxWrapper style={{ display: "flex", justifyContent: "space-between" }}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <div style={{ justifyContent: "space-between" }}>
        <NavigateCart
          to="/cart"
          style={{
            fontWeight: 600,
            cursor: "pointer",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          <Badge badgeContent={cartItems?.length} color="secondary">
            <Cart />
          </Badge>
          <Typography
            style={{
              color: "#000",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              marginLeft: 6,
            }}
          >
            Cart
          </Typography>
        </NavigateCart>
      </div>
      {account && <MyOrders onClick={handleMyOrders}>My Orders</MyOrders>}

      <LoginDialog open={open} setOpen={setOpen} />
    </BoxWrapper>
  );
};
export default CustomButtons;
