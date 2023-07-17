import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "fullcalendar";

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

  return (
    <>
      <FullCalendar
        height={500}
        plugins={[timeGridPlugin, dayGridPlugin]}
        initialView="timeGridWeek"
        viewClassNames="calendar"
        headerToolbar={headerToolbars}
        views={views}
        duration={{ default: "01:30" }}
        allDaySlot={false}
        events={events}
        editable={true}
        nowIndicator={true}
        nowIndicatorClassNames={"now"}
      />
    </>
  );
}

export default Schedule;
