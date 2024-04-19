import style from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon={faHouse} />;

function Search({ title }) {
  return (
    <>
      <div className={`${style.search}`}>
        <h3 className={`${style.title} text-center py-2`}>{title}</h3>
        <form id="search-form">
          <div className={`input-group mb-3  ${style.inputGroup}`}>
            <span
              className={`input-group-text ${style.searchIcon}`}
              id="basic-addon1"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="search"
              className="form-control"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
            <span
              className={`input-group-text ${style.leftsearchIcon}`}
              id="basic-addon1"
            >
              <FontAwesomeIcon icon={faBarsStaggered} />
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
export default Search;
