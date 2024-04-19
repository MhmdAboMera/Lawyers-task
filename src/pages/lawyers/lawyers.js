import LawyersCards from "../../componentes/lawyersCards/LawyersCards";
import Search from "../../componentes/search/Search";
import style from "./lawyers.module.css";
function Lawyers() {
  return (
    <>
      <div className={`${style.lawyers}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6">
              <Search title={"محامي مرخص"} />
            </div>
          </div>
          <LawyersCards />
        </div>
      </div>
    </>
  );
}
export default Lawyers;
