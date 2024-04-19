import { useEffect, useState } from "react";
// import style from "./lawyersCards.module.css";
import style from "../categories/categories.module.css";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCrown } from "@fortawesome/free-solid-svg-icons";
function LawyersCards() {
  const { catId } = useParams();
  const [lawyers, setlawyers] = useState([]);
  console.log(catId);
  const Api = `https://ymtaz.sa/api/client/`;
  useEffect(() => {
    fetch(`${Api}digital-guide/search`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4`,
      },
      body: JSON.stringify({
        category_id: catId,
      }),
    })
      .then((res) => res.json())
      .then((data) => setlawyers(data.data.lawyers));
  }, []);
  console.log(lawyers);
  return (
    <>
      <div className={`${style.Categories} my-3`}>
        <div className="row">
          {lawyers.map((lawyer) => {
            return (
              <div className="col-sm-12 col-md-4" key={lawyer.id}>
                <NavLink
                  to={`/lawyer/${lawyer.id}`}
                  className={`${style.categoriebox} p-4 mb-5 d-flex align-items-center flex-column `}
                >
                  <div className={`${style.categorieboxImge} p-2`}>
                    <img
                      src={lawyer.photo}
                      className={`img-fluid ${style.categorieImge}`}
                      alt={lawyer.title}
                    ></img>
                  </div>
                  <div className={`${style.categorieTitle} py-1 mt-2`}>
                    {lawyer.name}
                  </div>
                  <div className={`${style.categorieCount} py-1 d-flex gap-1`}>
                    {lawyer.about}
                    <FontAwesomeIcon icon={faCrown} />
                  </div>
                  <div className={`${style.categorieCount} py-1 d-flex gap-1`}>
                    <FontAwesomeIcon icon={faStar} />
                    4.56 (35 مراجعة)
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
export default LawyersCards;
