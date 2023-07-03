import arrow from "../assets/img/Arrow 1.svg";

function Button({ text, fun, size }) {
  const CN = "button " + size;
  return (
    <>
      <button className={CN} onClick={fun}>
        {text}
        <img src={arrow} alt="arrow" />
      </button>
    </>
  );
}
export default Button;
