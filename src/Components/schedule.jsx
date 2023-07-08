import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useState, useRef } from "react";
import "fullcalendar";

// let events = [
//   {
//     title: "Math Analysis 2 Lecture",
//     startTime: "09:00:00",
//     endTime: "10:30:00",

//     daysOfWeek: ["2"],
//     startRecur: "2023-07-03",
//     endRecur: "2023-08-04",
//   },
// ];

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

function Schedule({ events }) {
  let headerToolbars = {
    left: "prev,next",
    center: "title",
    right: "timeGridWeek,timeGridDay,WeekDay,dayGridMonth",
  };
  let views = {
    WeekDay: {
      type: "timeGrid",
      duration: { days: 7 },
      weekends: false,
      name: "Workdays",
    },
  };

  // let slot = { slotDuration: "01:30" };
  function add(start, end, alldays) {
    // console.log(start);?
  }
  return (
    <>
      <FullCalendar
        // defaultTimedEventDuration={{ duration: "01:30" }}
        // slotDuration={"01:30"}
        // slotDuration={"01:00"}
        height={500}
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        viewClassNames="calendar"
        headerToolbar={headerToolbars}
        views={views}
        duration={{ default: "01:30" }}
        allDaySlot={false}
        events={events}
        editable={true}
        // selectable={true}
        // selectHelper={true}
        nowIndicator={true}
        nowIndicatorClassNames={"now"}
        select={add}
      />
    </>
  );
}

export default Schedule;
