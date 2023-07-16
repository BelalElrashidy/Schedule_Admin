import Header from "./Components/Header.jsx";
// import Componetns from "./Components/ScheduleComponent.jsx";
import Button from "./Components/buttons.jsx";
import Schedule from "./Components/schedule.jsx";
import "./assets/css/main.css";
import "react-datetime/css/react-datetime.css";
import Modal from "./Components/modal.jsx";
import { useState, useRef } from "react";
import DropButton from "./Components/dropbutton.jsx";
import Selector from "./Components/DropModal.jsx";
import moment from "moment";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function App() {
  let data = require("./asset.json");

  let new_arr = [];
  for (let key in data) {
    let ev = {
      title: data[key].coursename + " - " + data[key].instructor,
      start: data[key].date + "T" + data[key].from_time + ":00",
      end: data[key].date + "T" + data[key].to_time + ":00",
      backgroundColor: "#ffd131",
      textColor: "#000000",
      borderColor: "#fdfffc",
      group: data[key].subgroup,
    };
    new_arr.push(ev);
  }

  const [events, setEvents] = useState(new_arr);

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
  const [G, setGroup] = useState("B22-CS-01");

  function groupfilter(arr, query) {
    return arr.filter((el) =>
      el.toString().toLowerCase().includes(query.toLowerCase())
    );
  }
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
  const AddEvent = (event) => {
    const new_event = {
      title: event.title + " - " + event.Name,
      start: moment(event.start).toISOString().toString().split(".")[0],
      end: moment(event.end).toISOString().toString().split(".")[0],
      backgroundColor: "#ffd131",
      textColor: "#ffffff",
      borderColor: "#fdfffc",
    };
    const updatedEvents = [...events, new_event];
    // console.log(updatedEvents);

    setEvents(updatedEvents);
    console.log(moment(event.startTime).toISOString().toString().split(".")[0]);
  };
  function EditEvent(event) {
    console.log(event.event.title);
    const filtered = groupfilter(new_arr, G);
    console.log(filtered);
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
          {/* <button>Notify Students Now</button> */}
        </div>
      </div>
      <div className="schedule">
        <h1>The Schedule</h1>
        <Schedule events={events} EditEvent={EditEvent} />
      </div>
      {isOpen && (
        <div id="MyModal">
          <Modal setIsOpen={setIsOpen} AddEvent={(event) => AddEvent(event)} />
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
    </>
  );
}

export default App;
