import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  fetch("categories.json")
    .then((res) => res.json())
    .then((data) => setCategories(data));

  return (
    <div>
      <h2 className="font-bold text-2xl">All Categories</h2>
      <div className="pl-3 mt-3">
        {categories.map((category) => (
          <NavLink
            to={`/${category.name}`}
            className="mb-2 block"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
