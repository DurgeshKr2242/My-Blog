import React, { useRef, useEffect, useState } from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  const colorRef = useRef();
  const [currentColor, setCurrentColor] = useState("");
  const [currentTextColor, setCurrentTextColor] = useState("white");
  const [currentTextColor2, setCurrentTextColor2] = useState("#878686");

  // HEX to RGB
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  // HANDLE COLOR CHANGE

  const handleCurrentColor = () => {
    setCurrentColor(colorRef.current.value);
    if (currentColor) {
      let r = hexToRgb(currentColor).r;
      let g = hexToRgb(currentColor).g;
      let b = hexToRgb(currentColor).b;

      let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
      if (hsp > 127.5) {
        setCurrentTextColor("black");
        setCurrentTextColor2("#383838");
      } else {
        setCurrentTextColor("white");
        setCurrentTextColor2("#878686");
      }
    }
  };

  return (
    <div
      style={{ backgroundColor: currentColor }}
      className={styles.heroMainContainer}
    >
      <input
        ref={colorRef}
        type="color"
        onChange={handleCurrentColor}
        colorpick-eyedropper-active="false"
      />

      <div className={styles.heroText}>
        <h1 style={{ color: currentTextColor }}>
          A <span> Developer's </span> PORTAL FOR ALL NEWS
        </h1>
        <p style={{ color: currentTextColor2 }}>
          Get a feed of the hottest developer news personalized to you. Read
          more quality articles. <br /> Stay up to date. Its free, its easy!
        </p>

        <button>
          EXPLORE YOUR FEED
          <lord-icon
            src="https://cdn.lordicon.com/tyounuzx.json"
            trigger="loop"
            colors="primary:#121331,secondary:#08a88a"
            stroke="100"
            scale="40"
            style={{ width: "50px", height: "50px" }}
          ></lord-icon>
        </button>
      </div>
      <p className={styles.totalBlogs}>Total Blogs: 22</p>
    </div>
  );
};

export default Hero;
