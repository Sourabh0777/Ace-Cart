import { AppBar, Toolbar, Box, styled } from "@mui/material";

// imported component
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
// handling css
const StyledHeader = styled(AppBar)`
  background: #fff;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
`;

const CustomButton = styled(Box)(({ theme }) => ({
  color: "#000",
  margin: "0 5px 0 10px",
}));

const Header = () => {

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img src="https://github.com/abhishek-1110/AceCart/assets/57557012/88c0697e-c966-4053-8330-fd49cd8abcff" alt="logo" style={{ width: 100 }} />
        </Component>
        <Search />
        <CustomButton>
          <CustomButtons />
        </CustomButton>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
