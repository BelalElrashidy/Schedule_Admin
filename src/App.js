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
  let incr = 0;
  for (let key in data) {
    let ev = {
      id: Number,
      title: data[key].coursename + " - " + data[key].instructor,
      startTime: data[key].from_time + ":00",
      end: data[key].to_time + ":00",
      backgroundColor: "#ffd131",
      textColor: "#000000",
      borderColor: "#fdfffc",
      daysOfWeek: [days.indexOf(data[key].day) + 1],
      startRecur: data[key].date,
      endRecur: "2023-08-10",
      group: data[key].subgroup_name,
      year: data[key].group_name,
    };
    ev.id = incr++;
    new_arr.push(ev);
  }

  const [events, setEvents] = useState(new_arr);

  const Group1 = [
    { value: "Select Group", label: "Select Group" },
    { value: "B22-CS-01", label: "B22-CS-01" },
    { value: "B22-CS-02", label: "B22-CS-02" },
    { value: "B22-CS-03", label: "B22-CS-03" },
    { value: "B22-CS-04", label: "B22-CS-04" },
    { value: "B22-CS-05", label: "B22-CS-05" },
    { value: "B22-CS-06", label: "B22-CS-06" },
    { value: "B22-DSAI-01", label: "B22-DSAI-01" },
    { value: "B22-DSAI-02", label: "B22-DSAI-02" },
    { value: "B22-DSAI-03", label: "B22-DSAI-03" },
    { value: "B22-DSAI-04", label: "B22-DSAI-04" },
  ];
  const Group2 = [
    { value: "Select Group", label: "Select Group" },
    { value: "В21-SD-01", label: "В21-SD-01" },
    { value: "В21-SD-02", label: "В21-SD-02" },
    { value: "В21-SD-03", label: "В21-SD-03" },
    { value: "В21-CS-01", label: "В21-CS-01" },
    { value: "В21-DS-01", label: "В21-DS-01" },
    { value: "В21-DS-02", label: "В21-DS-02" },
    { value: "В21-AI-01", label: "В21-AI-01" },
    { value: "В21-RO-01", label: "В21-RO-01" },
  ];
  const Year = [
    { value: "Select Year", label: "Select year" },
    { value: "BS - Year 1", label: "BS - Year 1" },
    { value: "BS - Year 2", label: "BS - Year 2" },
    // { value: "B20", label: "B20" },
    // { value: "B219", label: "B19" },
  ];
  let Group = [];
  const [isOpen, setIsOpen] = useState(false);
  const [group, groupIsOpen] = useState(false);
  const [year, yearIsOpen] = useState(false);
  const [G, setGroup] = useState("Select Group");
  const [Y, setYear] = useState("Select Year");
  if (Y === "BS - Year 1") {
    Group = Group1;
  } else if (Y === "BS - Year 2") {
    Group = Group2;
  } else {
    Group = [{ value: "Select Year", label: "Select year" }];
  }
  function groupfilter(item) {
    if (G === "Select Group") return true;
    if (item.group === G) {
      return true;
    }
    return false;
  }
  function yearfilter(item) {
    if (Y === "Select Year") return true;
    if (item.year === Y) {
      return true;
    }
    return false;
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
    setEvents(updatedEvents);
  };
  function GetEventsByGroup() {
    const filtered = new_arr.filter(groupfilter);
    setEvents(filtered);
  }
  function GetEventsByYear() {
    const filtered = new_arr.filter(yearfilter);
    setEvents(filtered);
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
          <DropButton text={Y} size="large" data={Year} setIsOpen={YearOpen} />
          <DropButton
            text={G}
            size="large"
            data={group}
            setIsOpen={GroupOpen}
          />
        </div>
        {/* <div className="second">
          <DropButton
            text="Select Subject"
            size="large"
            data={Course}
            setIsOpen={SubjectOpen}
          />
          <button>Notify Students Now</button>
        </div> */}
      </div>
      <div className="schedule">
        <h1>The Schedule</h1>
        <Schedule events={events} />
      </div>
      {isOpen && (
        <div id="MyModal">
          <Modal setIsOpen={setIsOpen} AddEvent={(event) => AddEvent(event)} />
        </div>
      )}
      {year && (
        <div id="MyModal">
          <Selector
            setIsOpen={yearIsOpen}
            data={Year}
            setGroup={setYear}
            filter={GetEventsByYear}
          />
        </div>
      )}
      {group && (
        <div id="MyModal">
          <Selector
            setIsOpen={groupIsOpen}
            setGroup={setGroup}
            filter={GetEventsByGroup}
            data={Group}
          />
        </div>
      )}
      {/* {subject && (
        <div id="MyModal">
          <Selector setIsOpen={subjectIsOpen} data={Course} />
        </div>
      )} */}
    </>
  );
}

export default App;
