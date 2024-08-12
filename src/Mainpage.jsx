// Mainpage.jsx
import React, { useState } from "react";
import './index.css';
import Navbar from './Navbar';

function Mainpage() {
  const [selectedImage, setSelectedImage] = useState("./image/cupcake1.png");
  const [leftBackgroundColor, setLeftBackgroundColor] = useState("rgb(226, 12, 115)");
  const [rightBackgroundColor, setRightBackgroundColor] = useState("rgb(222, 99, 160)");
  

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    if (imageSrc === "./image/cupcake1.png") {
      setLeftBackgroundColor("rgb(226, 12, 115)");
      setRightBackgroundColor("rgb(222, 99, 160)");
     
    } else if (imageSrc === "./image/cupcake2.png") {
      setLeftBackgroundColor("rgb(122, 56, 250)");
      setRightBackgroundColor("rgb(150, 200, 255)");
      
    } else if (imageSrc === "./image/cupcake5.png") {
      setLeftBackgroundColor("rgb(78, 212, 249)");
      setRightBackgroundColor("rgb(200, 150, 150)");
      
    }
  };

  return (
    <>
      <Navbar/>
      <div className="parentflex">
        <div className="leftchild" style={{ backgroundColor: leftBackgroundColor }}>
          <div className="leftchild2">
            <h1 id="heading">CAKESHOPPIE</h1>
            <div className="leftchild1">
              <div className="imgdiv">
                <img width={100} src="./image/cupcake1.png" alt="cupcake1" onClick={() => handleImageClick("./image/cupcake1.png")} />
                <img width={100} src="./image/cupcake2.png" alt="cupcake2" onClick={() => handleImageClick("./image/cupcake2.png")} />
                <img width={100} src="./image/cupcake5.png" alt="cupcake5" onClick={() => handleImageClick("./image/cupcake5.png")} />
              </div>
              <div className="textdiv">
                <h2>Love At First Bite</h2>
                <br />
                <h2>Unleash your sweetest taste with our heavenly CUP CAKES!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="rightchild" style={{ backgroundColor: rightBackgroundColor }}>
          <img id="image" style={{ width: "25%", height: "50%", position: "fixed", right: 230 }} src={selectedImage} alt="selected cupcake" />
        </div>
      </div>
    </>
  );
}

export default Mainpage;
