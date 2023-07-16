import arrow from "../assets/img/Arrow 1.svg";

function DropButton({ text, size, data, setIsOpen, setStyle }) {
  const CN = "button " + size;
  return (
    <>
      <button className={CN} onClick={setIsOpen}>
        {text}
        <img src={arrow} alt="arrow" />
      </button>
    </>
  );
}
export default DropButton;
