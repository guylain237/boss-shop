import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "./card/CardFeature";
import FilterProduct from "./FilterProduct";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.categorie))];
console.log("boss");
console.log(productData);
  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (categorie) => {
    setFilterBy(categorie)


// Supprimer les doublons de productData
  const uniqueProductData = Array.from(new Set(productData.map(a => a._id)))
    .map(_id => {
      return productData.find(a => a._id === _id)
    })

  const filter = uniqueProductData.filter(
    (el) => el.categorie.toLowerCase() === categorie.toLowerCase()
  );

  setDataFilter(() => {
    return [...filter];
  });
};

  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll-hidden overflow-y-hidden scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilterProduct
                categorie={el}
                key={el._id}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el,index) => {
              return (
                <CardFeature
                  key={index}
                  id={el._id}
                  image={el.image}
                  nom={el.nom}
                  categorie={el.categorie}
                  prix={el.prix}
                />
              );
            })
          : 
          loadingArrayFeature.map((el,index) => (
              <CardFeature loading="Loading..." key={index+"allProduct"} />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
