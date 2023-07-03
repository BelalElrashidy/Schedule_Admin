import Header from "./Components/Header.jsx";
// import Componetns from "./Components/ScheduleComponent.jsx";
import Button from "./Components/buttons.jsx";
import Schedule from "./Components/schedule.jsx";
import "./assets/css/main.css";

function App() {
  return (
    <>
      <Header />
      <div className="text">
        <div>
          <h1>Hello Admin,</h1>
          <p>Dashboard</p>
        </div>
        <Button text="Add Event" size="small" />
      </div>
      <div className="selections">
        <div>
          <Button text="Select Year" size="large" />
          <Button text="Select subject" size="large" />
        </div>
        <div className="second">
          <Button text="Select group" size="large" />
          <button>Notify Students Now</button>
        </div>
      </div>
      <div className="schedule">
        <h1>The Schedule</h1>
        <Schedule />
      </div>
    </>
  );
}

export default App;
