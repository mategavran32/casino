import Carousel from "../utils/Carousel";
import Games from "../game/Games";
import Payment from "../payment/Payment";
import "../../styles/Main.scss";
import Publishers from "../publishers/Publishers";
import PopularGames from "../game/PopularGames";
import React, { useEffect } from "react";
import useDataStore from "../../store/useDataStore";

const images = [
  "https://www.novomatic.com/sites/default/files/styles/teaser/public/2021-05/77XzYsIjwxfZ0Kv.jpg?itok=BitsQd-p",
  "https://www.novomatic.com/sites/default/files/styles/teaser/public/2021-05/KdSwD5Ps5tkC5u8.jpg?itok=CQopEAC_",
  "https://www.novomatic.com/sites/default/files/styles/teaser/public/2022-11/c7UvatX9i7QB7dd.jpg?itok=L6vm4AM_",
];

function Main() {
  const { fetchData } = useDataStore((state) => ({
    fetchData: state.fetchData,
  }));
  useEffect(() => {
    fetchData.games();
  }, [fetchData.games]);
  return (
    <>
      <div className="mainContainer">
        <Carousel images={images} />
        <Payment />
        <Games publisher="Gamomat" />
        <Games publisher="Merkur" />
        <PopularGames />
        <Publishers />
        <Games publisher="Peter & Sons" />
      </div>
    </>
  );
}

export default Main;
