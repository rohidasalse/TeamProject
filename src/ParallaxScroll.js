// ParallaxScroll.js
// import React from "react";
import React, { useRef } from "react";
import { Parallax } from "react-parallax";

const ParallaxScroll = () => {
  const regularContentRef = useRef(null); // Create a ref for the regular content section

  // Function to scroll to the regular content section
  const scrollToContent = () => {
    regularContentRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* First parallax section */}
      <Parallax
        bgImage="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        strength={500}
      >
        <div style={{ height: 800 }}>
          <div style={styles.content}>
            <h1>Welcome to the Parallax Effect</h1>
            <p onClick={scrollToContent} style={styles.link}>
              Scroll down to see more...
            </p>
          </div>
        </div>
      </Parallax>

      {/* Static content between parallax sections */}
      <div ref={regularContentRef} style={styles.section}>
        <h2>Regular Content Section</h2>
        <p>This section doesn’t move with the parallax effect.</p>
      </div>

      {/* Second parallax section */}
      <Parallax bgImage="logo192.png" strength={300}>
        <div style={{ height: 500 }}>
          <div style={styles.content}>
            <h2>Another Parallax Section</h2>
            <p>Each section can have different images and strength values.</p>
          </div>
        </div>
      </Parallax>

      {/* Additional content */}
      <div style={styles.section}>
        <h2>More Content</h2>
        <p>Keep adding content as desired!</p>
      </div>
    </div>
  );
};

const styles = {
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    color: "white",
    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  section: {
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  },
};

export default ParallaxScroll;
