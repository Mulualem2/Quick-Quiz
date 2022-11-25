import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});

const Footer = () => {
    return (
      <Box sx={{ background: "#022D36", height: "300px" }}>
        <Stack direction={{ xs: "row", md: "row" }} p={7}>
          <Box flex={1}>
            <Typography color={"white"} align={"center"}>
              Contact Us
            </Typography>
            <Typography color={"white"} align={"center"}>
              We want to here from you <span role = "img">😊</span>
            </Typography>
            <Typography color={"white"} align={"center"}>
            Mailing Address: 1000 Churchle Ave., Arada Subcity, AA 90066,
            </Typography>
            <Typography color={"white"} align={"center"}>
            Email adim@quickQuiz.com
            </Typography>
          </Box>
          <Box flex={1}>
            <Typography color={"white"} align={"center"}>
              Data policy
            </Typography>
            <Typography color={"white"} align={"center"}>
              cookies
            </Typography>
            <Typography color={"white"} align={"center"}>
              Data Safety
            </Typography>
          </Box>
          <Box flex={1}>
            <Typography color={"white"} align={"center"}>
              Categories
            </Typography>
            <Typography color={"white"} variant={"body2"} align={"center"}>
              About Us
            </Typography>
            <Typography color={"white"} variant={"body2"} align={"center"}>
              Site Map
            </Typography>
            <Typography color={"white"} variant={"body2"} align={"center"}>
              Explore
            </Typography>
          </Box>
          <Box>
            <Typography color={"white"} align={"center"}>
              Follow Us
            </Typography>
            <SocialBox>
              <Facebook />
              <Instagram />
              <Twitter />
            </SocialBox>
          </Box>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  