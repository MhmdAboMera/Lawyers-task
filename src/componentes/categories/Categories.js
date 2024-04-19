import { useEffect, useState } from "react";
import style from "./categories.module.css";
import { NavLink } from "react-router-dom";
function Categories() {
  const [categories, setCategories] = useState([]);
  const Api = `https://ymtaz.sa/api/client/`;
  useEffect(() => {
    fetch(`${Api}digital-guide/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.data.categories));
  }, []);
  return (
    <>
      <div className={`${style.Categories} my-3`}>
        <div className="row">
          {categories.map((categorie) => {
            return (
              <div className="col-sm-12 col-md-4" key={categorie.id}>
                <NavLink
                  to={`category/${categorie.id}`}
                  className={`${style.categoriebox} p-4 mb-5 d-flex align-items-center flex-column `}
                >
                  <div className={`${style.categorieboxImge} p-2`}>
                    <img
                      src={categorie.image}
                      className={`img-fluid ${style.categorieImge}`}
                      alt={categorie.title}
                    ></img>
                  </div>
                  <div className={`${style.categorieTitle} py-1 mt-2`}>
                    {categorie.title}
                  </div>
                  <div className={`${style.categorieCount} py-1`}>
                    متوفر عدد : {categorie.lawyers_count}
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Categories;
