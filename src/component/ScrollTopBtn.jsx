import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function ScrollTopBtn() {
  const [showBtn, setShowBtn] = useState(false);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowBtn = () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    };
  }, []);

  return (
    showBtn && (
      <div>
        <BsFillArrowUpCircleFill
          fontSize="40px"
          style={StyledButton}
          onClick={toTop}
        />
      </div>
    )
  );
}

export default ScrollTopBtn;

const StyledButton = {
  cursor: "pointer",
  display: "absolute",
  position: "fixed",
  right: "3%",
  bottom: "15%",
};
