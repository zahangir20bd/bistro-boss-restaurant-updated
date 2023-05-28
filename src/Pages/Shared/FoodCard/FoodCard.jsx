import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto rounded-none">
      <figure>
        <img src={image} alt="Food Image" />
      </figure>
      <p className="bg-slate-950 text-white absolute right-0 mt-5 mr-5 px-3 rounded">
        ${price}
      </p>
      <div className="card-body ">
        <h2 className="text-2xl font-semibold text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline btn-warning bg-gray-100 border-0 border-b-2 mt-5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
