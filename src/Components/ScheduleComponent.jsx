import "../assets/css/main.css";
let comp = ["time"];

function Components() {
  return (
    <>
      {comp.map((item) => (
        <li key={item} className="component">
          {item}
        </li>
      ))}
    </>
  );
}
export default Components;
