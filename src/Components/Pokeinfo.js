import React from "react";

const Pokeinfo = () => {
  return (
    <>
      <h1>Charmander</h1>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" />
      <div className="abilities">
        <div className="group">
          <h2>Blaze</h2>
        </div>
        <div className="group">
          <h2>Solar Power</h2>
        </div>
      </div>
      <div className="base-stat">
        <h2>Hp:30</h2>
        <h3>attack:52</h3>
        <h3>defense:52</h3>
        <h3>special-attack:52</h3>
        <h3>Speed</h3>
      </div>
    </>
  );
};
export default Pokeinfo;
