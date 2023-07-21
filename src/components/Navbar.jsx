import React from "react";
import { Link } from "react-router-dom";
// mui components
import { Stack } from "@mui/material";
import { logo } from "../Utils/constants";
import {SearchBar} from "../components/component"
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        top: "0px",
        backgroundColor: "#000",
        justifyContent: "space-between",
      }}
    >
        <Link to={"/"} style={{display:'flex',alignItems:"center"}}>
            <img  alt="logo" src={logo} height={45}/>
        </Link>
        <SearchBar />
    </Stack>
  );
};

export default Navbar;
