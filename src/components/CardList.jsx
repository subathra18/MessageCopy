import React from "react";
import Card from "./Card";
import data from "../data.json";

const CardList = () => {
  return (
    <div className="mx-20 mt-16 pb-10 grid  gap-y-16 gap-x-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((datum) => {
        return <Card key={datum.id} data={datum}></Card>;
      })}
    </div>
  );
};

export default CardList;
