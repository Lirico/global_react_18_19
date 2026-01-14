import React from "react";
import Button from "./Button";


const Card = ({destino}) => {

    const {image, title, description, bgColor} = destino;

  return (
    <>
      <div className="card">
        <img
          src={image}
          alt=""
        />
        <h3>{title}</h3>
        <p>{description}</p>
        <Button bgColor={bgColor}/>
      </div>

      <style jsx>{`
        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 250px;
            border: 1px solid black;
        }
        img {
            width: 100%;
            height: 45%;
        }
        p {
            padding: 0 15px;
        }
      `}</style>
    </>
  );
};

export default Card;
