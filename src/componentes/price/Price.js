import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import style from "./Price.module.css";
function Price() {
  return (
    <div className={`${style.Price} mb-3  p-4`}>
      <div className="row">
        <div className="col-8">
          <div
            className={`${style.priceTitle} py-1 d-flex gap-1 align-items-center`}
          >
            <FontAwesomeIcon icon={faPhoneVolume} />
            خدمة الاستشارة الهاتفية
          </div>
          <p className={`info-text text-end`}>
            ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة
          </p>
        </div>
        <div className="col-4">
          <p className={`${style.des} info-text text-end mb-1`}>سعر الخدمة </p>
          <p className={`${style.priceNum} info-text`}>300 ر.س </p>
        </div>
        <button className={`col-12 btn ${style.btnOrder}`}>طلب الخدمة</button>
      </div>
    </div>
  );
}
export default Price;
