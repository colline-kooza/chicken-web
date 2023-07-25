import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-image-text">
        <h3 className="h3">WELCOME TO FLAKO LTD</h3>
      </div>
      <div className="welcome-main">
        <div className="welcome-image">
          <Image src="/../public/images/chicks.jpg" alt="" fill />
        </div>
        <div className="welcome-text">
          <h4>Sustainable and Vibrant Chickens!</h4>
          <p>
            Embark on a delightful poultry adventure with our vibrant chicks,
            delivered to your door. Raise a healthy and diverse flock with
            confidence, creating unforgettable memories along the way.
            Experience the joy of sustainable living and discover the rewarding
            world of raising your own chickens. Start your poultry paradise
            journey today!
          </p>
          <div className="welcome-button">
            <button>Veiw More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
