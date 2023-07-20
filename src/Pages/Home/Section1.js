import React, { useState, useEffect } from "react";
import Shoe from "./../../assets/2.png";
import Shoe2 from "./../../assets/3.png";
import { Typography } from "@mui/material";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Section1 = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        background: isLargeScreen
          ? "linear-gradient(to right, rgb(251, 231, 52),rgb(244, 92, 116))"
          : "linear-gradient(to bottom,rgb(251, 231, 52), rgb(187, 58, 41))",
        display: "flex",
        alignItems: "center",
        flexDirection: isLargeScreen ? "row" : "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "100%",
          position: isLargeScreen ? "absolute" : "relative",
          order: isLargeScreen ? "1" : "2",
          display: "flex",
          justifyContent: isLargeScreen ? "flex-start" : "center",
          margin: "-90px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "rgb(187, 58, 41)", margin: 2 }}
          fontWeight="bold"
        >
          New Collection
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "rgb(99, 92, 92)", margin: 2 }}
          fontWeight="bold"
        >
          New Collection
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "rgb(187, 58, 41)", margin: 2 }}
          fontWeight="bold"
        >
          New Collection
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "rgb(99, 92, 92)", margin: 2 }}
          fontWeight="bold"
        >
          New Collection
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "rgb(143, 25, 45)", margin: 2 }}
          fontWeight="bold"
        >
          New Collection
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "rgb(187, 58, 41)", margin: 2 }}
          fontWeight="bold"
        >
          New Collection
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "rgb(143, 25, 45)", margin: 2 }}
          fontWeight="bold"
        >
          New Collection
        </Typography>
      </div>
      <motion.div
      initial={{ x: -1000 }} 
      animate={{ x: 0 }} 
      transition={{type:"spring",duration:"1",delay:"0.5"}}
    
        style={{
          display: "flex",
          marginTop: isLargeScreen ? "0" : "60px",
          marginRight: isLargeScreen ? "60px" : "0",
          order: isLargeScreen ? "2" : "1",
          width: "100vw",
          justifyContent: isLargeScreen ? "flex-end" : "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src={Shoe}
          alt="shoe1"
          style={{
            width: "100%",
            maxWidth: isLargeScreen ? "900px" : "400px",
            transform: `${isLargeScreen ? "rotate(20deg)" : ""} ${
              isLargeScreen ? "scaleX(-1)" : "scaleX(-1)"
            }`,
          }}
        />
      </motion.div>
      <motion.div
      initial={{ x: 1000 }} 
      animate={{ x: 0 }} 
      transition={{type:"spring",duration:"1",delay:"0.5"}}
        style={{
          display: "flex",
          marginTop: isLargeScreen ? "0" : "60px",
          marginRight: isLargeScreen ? "60px" : "0",
          order: isLargeScreen ? "2" : "1",
          width: "100vw",
          justifyContent: isLargeScreen ? "flex-end" : "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src={Shoe2}
          alt="shoe1"
          style={{
            width: "100%",
            zIndex: 2,
            maxWidth: isLargeScreen ? "900px" : "400px",
            transform: `${isLargeScreen ? "rotate(-20deg)" : ""}`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Section1;
