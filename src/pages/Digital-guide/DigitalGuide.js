import Categories from "../../componentes/categories/Categories";
import Search from "../../componentes/search/Search";
import style from "./DigitalGuide.module.css";
function DigitalGuide() {
  return (
    <>
      <div className={`${style.DigitalGuide}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6">
              <Search title={"الدليل الرقمي"} />
            </div>
          </div>
          <Categories />
        </div>
      </div>
    </>
  );
}
export default DigitalGuide;
