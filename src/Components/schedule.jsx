import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import Button from "./buttons";
import { useState } from "react";

let events = [
  {
    title: "Math Analysis 2 Lecture",
    start: "2023-07-04T09:00:00",
    end: "2023-07-04T10:30:00",
    backgroundColor: "#fdfffc",
    textColor: "#000000",
    borderColor: "#fdfffc",
  },
  {
    title: "Software Project Tutorial",
    start: "2023-07-03T10:40:00",
    end: "2023-07-03T12:10:00",
    backgroundColor: "#fdfffc",
    textColor: "#000000",
    borderColor: "#fdfffc",
  },
  {
    title: "Computer Archeticture Tutorial",
    start: "2023-07-05T09:00:00",
    end: "2023-07-05T10:30:00",
    backgroundColor: "#fdfffc",
    textColor: "#000000",
    borderColor: "#fdfffc",
  },
  {
    title: "Math Analysis 2 Lab",
    start: "2023-07-04T12:40:00",
    end: "2023-07-04T14:10:00",
    backgroundColor: "#fdfffc",
    textColor: "#000000",
    borderColor: "#fdfffc",
  },
  {
    title: "Software Project Lecture",
    start: "2023-07-03T09:00:00",
    end: "2023-07-03T10:30:00",
    backgroundColor: "#fdfffc",
    textColor: "#000000",
    borderColor: "#fdfffc",
  },
  {
    title: "Math Analysis 2 tutorial",
    start: "2023-07-04T10:40:00",
    end: "2023-07-04T12:10:00",
    backgroundColor: "#fdfffc",
    textColor: "#000000",
    borderColor: "#fdfffc",
  },
];
// let headerToolbars = {
//   left: "prev,next",
//   center: "title",
//   right: "dayGridWeek,dayGridDay,WeekDay",
// };
// let views = {
//   WeekDay: {
//     type: "dayGrid",
//     duration: { days: 5 },
//   },
// };
// let slot = { slotDuration: "01:30" };

// function Schedule() {
//   return (
//     <>
//       <FullCalendar
//         height={500}
//         plugins={[dayGridPlugin]}
//         initialView="dayGridWeek"
//         viewClassNames="calendar"
//         headerToolbar={headerToolbars}
//         views={views}
//         duration={{ default: "01:30" }}
//         allDaySlot={false}
//         events={events}
//       />
//     </>
//   );
// }

// export default Schedule;

let headerToolbars = {
  left: "prev,next",
  center: "title",
  right: "timeGridWeek,timeGridDay,WeekDay",
};
let views = {
  WeekDay: {
    type: "timeGrid",
    duration: { days: 5 },
  },
};
let slot = { slotDuration: "01:30" };

function Schedule() {
  return (
    <>
      <FullCalendar
        height={650}
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        viewClassNames="calendar"
        headerToolbar={headerToolbars}
        views={views}
        duration={{ default: "01:30" }}
        allDaySlot={false}
        events={events}
      />
    </>
  );
}

export default Schedule;
