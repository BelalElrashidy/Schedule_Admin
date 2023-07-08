import Header from "./Components/Header.jsx";
// import Componetns from "./Components/ScheduleComponent.jsx";
import Button from "./Components/buttons.jsx";
import Schedule from "./Components/schedule.jsx";
import "./assets/css/main.css";
import Modal from "./Components/modal.jsx";
import { useState } from "react";
import DropButton from "./Components/dropbutton.jsx";
import Selector from "./Components/DropModal.jsx";
import Datetime from "react-datetime";

function fetchDataFromCSV(file) {
  fetch(file)
    .then((response) => response.text())
    .then((csvText) => {
      const csvRows = csvText.split("\n");

      // Process each row
      csvRows.forEach((row) => {
        const columns = row.split(",");
        // Access each column value and perform desired operations
        console.log(columns);
      });
    })
    .catch((error) => {
      console.error("Error fetching CSV file:", error);
    });
}

// Usage example
fetchDataFromCSV("SummerSchedule.csv");

const events = [
  {
    title: "Math Analysis 2 Lecture",
    startTime: "09:00:00",
    endTime: "10:30:00",
    backgroundColor: "#fdfffc",
    textColor: "#000000",
    borderColor: "#fdfffc",
    daysOfWeek: ["2"],
    startRecur: "2023-07-01",
    endRecur: "2023-08-01",
  },
];
const event = () => {
  return events;
};
function App() {
  const Group = [
    { value: "Select Group", label: "Select Group" },
    { value: "CS-01", label: "CS-01" },
    { value: "CS-02", label: "CS-02" },
    { value: "CS-03", label: "CS-03" },
    { value: "CS-04", label: "CS-04" },
    { value: "CS-05", label: "CS-05" },
    { value: "CS-06", label: "CS-06" },
    { value: "DSAI-01", label: "DSAI-01" },
    { value: "DSAI-02", label: "DSAI-02" },
    { value: "DSAI-03", label: "DSAI-03" },
    { value: "DSAI-04", label: "DSAI-04" },
  ];
  const Year = [
    { value: "Select year", label: "Select year" },
    { value: "B22", label: "B22" },
    { value: "B21", label: "B21" },
    { value: "B20", label: "B20" },
    { value: "B219", label: "B19" },
  ];
  const Course = [];
  const [isOpen, setIsOpen] = useState(false);
  const [group, groupIsOpen] = useState(false);
  const [subject, subjectIsOpen] = useState(false);
  const [year, yearIsOpen] = useState(false);
  function ModalOpen() {
    setIsOpen(true);
  }
  function YearOpen() {
    yearIsOpen(true);
  }
  function GroupOpen() {
    groupIsOpen(true);
  }
  function SubjectOpen() {
    subjectIsOpen(true);
  }

  return (
    <>
      <Header />

      <div className="text">
        <div>
          <h1>Hello Admin,</h1>
          <p>Dashboard</p>
        </div>
        <Button text="Add Event" size="small" fun={ModalOpen} />
      </div>
      <div className="selections">
        <div>
          <DropButton
            text="Select Year"
            size="large"
            data={Year}
            setIsOpen={YearOpen}
          />
          <DropButton
            text="Select subject"
            size="large"
            data={group}
            setIsOpen={SubjectOpen}
          />
        </div>
        <div className="second">
          <DropButton
            text="Select group"
            size="large"
            data={Course}
            setIsOpen={GroupOpen}
          />
          <button>Notify Students Now</button>
        </div>
      </div>
      <div className="schedule">
        <h1>The Schedule</h1>
        <Schedule events={events} />
      </div>
      {isOpen && (
        <div id="MyModal">
          <Modal setIsOpen={setIsOpen} />
        </div>
      )}
      {year && (
        <div id="MyModal">
          <Selector setIsOpen={yearIsOpen} data={Year} />
        </div>
      )}
      {group && (
        <div id="MyModal">
          <Selector setIsOpen={groupIsOpen} data={Group} />
        </div>
      )}
      {subject && (
        <div id="MyModal">
          <Selector setIsOpen={subjectIsOpen} data={Course} />
        </div>
      )}
      <Datetime />
    </>
  );
}

export default App;
