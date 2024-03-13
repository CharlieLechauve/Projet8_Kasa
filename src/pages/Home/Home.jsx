import React from "react";
import Banner from "../../components/Banner/Banner";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";
import Cards from "../../components/Cards/Cards";
const Home = () => {
  return (
    
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} alt="Image de la nature" />
        <Cards/>
      </main>
    
  );
};

export default Home;
