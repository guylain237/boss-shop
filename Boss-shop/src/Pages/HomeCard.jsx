import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ nom, image, categorie, prix, loading,id }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px]">
      {nom ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior : "smooth"})} >
          <div className="w-40 min-h-[150px]">
            <img src={image} className="h-full w-full" />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            {nom}
          </h3>
          <p className="text-center text-slate-500  font-medium">{categorie}</p>
          <p className="text-center font-bold">
            <span className="text-green-500">$</span>
            <span>{prix}</span>
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
