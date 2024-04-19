import { useParams } from "react-router-dom";
import style from "./oneLawyer.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCrown } from "@fortawesome/free-solid-svg-icons";
import TabMenu from "../../componentes/TabMenu/TabMenu";
function OneLawyer() {
  const [lawyer, setLawyer] = useState([]);
  const Api = `https://ymtaz.sa/api/client/`;
  const { lawyerId } = useParams();
  const fetchlawyerData = () => {
    const headers = {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4",
    };
    fetch(`${Api}lawyer/${lawyerId}`, { headers })
      .then((response) => response.json())
      .then((data) => setLawyer(data.data.lawyer));
  };
  useEffect(() => {
    fetchlawyerData();
  }, []);
  return (
    <div className={`${style.oneLawyer} mt-2`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8" key={lawyer.id}>
            <div className={`${style.infoBox} p-4 mb-4`}>
              <h3 className={`${style.infoTitle} mb-3`}>المعلومات الشخصية</h3>
              <div className="row">
                <div className="col-sm-12 col-md-3">
                  <div className={`${style.infoimgBox}`}>
                    <img
                      src={lawyer.photo}
                      className={`${style.infoImg} img-fluid`}
                    ></img>
                  </div>
                </div>
                <div className="col-sm-12 col-md-9">
                  <h3 className={`${style.infoName} `}>{lawyer.name} </h3>
                  <div
                    className={`${style.categorieCount} py-1 d-flex gap-1 align-items-center info-text`}
                  >
                    {lawyer.about}
                    <FontAwesomeIcon icon={faCrown} />
                  </div>
                  <div className="d-flex gap-3 pt-2">
                    <span className={`${style.icons}`}>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className={`info-text`}>
                      500 التقييم العام من 154 من العملاء
                    </span>
                    <span className={`${style.showRate}`}>اظهر التقييمات</span>
                  </div>
                  <div className=" mt-3">
                    <div className={`${style.infoDesc} info-text text-end`}>
                      {" "}
                      تميز الاستشاري بالاحترافية والخبرة العالية في المسائل
                      القانونية{" "}
                    </div>
                    <div className="d-flex gap-3 pt-2">
                      <span className={`${style.icons}`}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span className={`info-text`}>Abdullah Faleh </span>
                      <span className={`info-text`}>الخميس 3 فبراير 2024 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.infoBox} p-4 mb-4`}>
              <h3 className={`${style.infoTitle} mb-3`}>النبذة التعريفية</h3>
              <p className={`info-text text-end`}>
                استشاري القانون عبد العزيز عبد الرحمن الربعي وهو محام مرخص في
                المملكة العربية السعودية، يحمل درجة البكالوريوس في القانون.
                يتمتع بخبرة تبلغ سنتين في مجال ممارسة القانون
              </p>
            </div>
            <div className={`${style.infoBox} p-4 mb-4`}>
              <h3 className={`${style.infoTitle} mb-3`}>تقييم العملاء:</h3>
              <div className="row">
                <div className="pt-2 col-4">
                  <div className={`${style.icons}`}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className={`info-text text-end`}>
                    500 التقييم العام من 154 من العملاء
                  </div>
                </div>
                <div className="pt-2 col-4">
                  <div className={`${style.icons}`}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className={`info-text text-end`}>تقييم المنصة </div>
                </div>
                <div className="pt-2 col-4">
                  <div className={`${style.number}`}>5/5</div>
                  <div className={`info-text text-end`}> تقييم الاستشاري</div>
                </div>
              </div>
            </div>
            <div className={`${style.infoBox} p-4 mb-4`}>
              <div className="row">
                <div className="col-8">
                  <div className={`${style.icons}`}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>{" "}
                  <p className={`info-text text-end my-1`}>التقييم العام</p>
                  <p className={`info-text text-end mb-0`}>
                    استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا
                    القانونية والفقهية
                  </p>
                  <p className={`info-text text-end mt-4`}>
                    {" "}
                    الخميس 3 فبراير 2024
                  </p>
                </div>
                <div className="pt-2 col-4">
                  <div className={`${style.number}`}>5/5</div>
                  <div className={`info-text text-end`}> تقييم الاستشاري</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className={`${style.infoBox} p-4 mb-4`}>
              <TabMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OneLawyer;
