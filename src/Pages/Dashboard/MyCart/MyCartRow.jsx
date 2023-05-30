import React from "react";

const MyCartRow = ({ item, index }) => {
  const { image, price, name } = item;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div
              style={{ borderRadius: "0 200px 200px 200px" }}
              className="mask w-20 h-14"
            >
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h4>{name}</h4>
      </td>
      <td>${price}</td>
      <td>
        <button className="btn btn-ghost btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default MyCartRow;
