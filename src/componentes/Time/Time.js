import Price from "../price/Price";
import style from "./Time.module.css";
function Time() {
  return (
    <div className={`${style.time}`}>
      <Price />
    </div>
  );
}
export default Time;
