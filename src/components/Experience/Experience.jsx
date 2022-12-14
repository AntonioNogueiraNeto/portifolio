import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>8+</div>
        <span  style={{color: darkMode?'white':''}}>Meses </span>
        <span>Experiencia</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>Projetos </span>
        <span>Completos</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>6</div>
        <span  style={{color: darkMode?'white':''}}>Meses Estudando na </span>
        <span>Trybe</span>
      </div>
    </div>
  );
};

export default Experience;
