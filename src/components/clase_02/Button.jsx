import React from "react";



const Button = (props) => {
  return (
    <>
        <button>Comprar</button>

        <style jsx>{`
            button {
                background-color: ${props.bgColor};
                border: none;
                border-radius: 0.5rem;
                color: white;
                font-size: 1rem;
                font-weight: bold;
                padding: 10px 20px;
                text-transform: uppercase;
            }
        `}</style>
    </>
  )

  
};

export default Button;


