import React from 'react';
import Background from "./Images/Background.svg";
import Girl from './Images/Girl.svg';


const ContentA = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        top: 0,
      }}
    >
      <div>
        <div>
        <p> Studying Online is now much easier</p>
        <p> TOTC is an interesting platfrom that will teach you in more an interactive way</p>
        <div>
          <button>Join for free</button>
          <button><img src="" alt="" /> Watch how it works </button>

        </div>
        </div>
        <div>
          <img src={Girl} alt="" />

        </div>
      </div>
    </div>
  );
}

export default ContentA
