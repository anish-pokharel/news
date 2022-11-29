import React, { useState } from "react";
import { hero } from "../../dummuData";
import Card from "./Card";
import "./style.css";
const Hero = () => {
  const [items, setIems] = useState(hero);

  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
