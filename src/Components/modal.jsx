import { useState } from "react";
import Datetime from "react-datetime";
function Modal({ setIsOpen, AddEvent }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [room, setRoom] = useState(0);
  const [Name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [group, setGroup] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AddEvent({
      title,
      Name,
      start,
      end,
      course,
      group,
      room,
      type,
    });
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    setRoom(0);
    setName("");
    setCourse("");
    setGroup("");
    setIsOpen(false);
  };

  // Get the modal

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

  let Group = [];

  if (course === "BS - Year 1") {
    Group = Group1;
  } else if (course === "BS - Year 2") {
    Group = Group2;
  } else {
    Group = [{ value: "Select Year", label: "Select year" }];
  }

  const Courses = [
    { value: "Select Year", label: "Select year" },
    { value: "BS - Year 1", label: "BS - Year 1" },
    { value: "BS - Year 2", label: "BS - Year 2" },
  ];
  const Types = [
    { value: "lab", label: "Lab" },
    { value: "lec", label: "Lecture" },
    { value: "Tut", label: "Tutorial" },
  ];

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Add Event</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <span>&times;</span>
          </button>
          <div className="modalContent">
            <form action="submit" onSubmit={handleSubmit}>
              <label htmlFor="Name" className="dataI">
                Name
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </label>
              <br />
              <label htmlFor="Lecturer" className="dataI">
                Lecturer Name
                <input
                  type="text"
                  name="Lecturer"
                  id="Lecturer"
                  placeholder="Lecturer"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <label htmlFor="room" className="dataI">
                Location
                <input
                  type="number"
                  name="room"
                  id="room"
                  placeholder="Room Number"
                  onChange={(e) => setRoom(e.target.value)}
                />
              </label>
              <br />
              <label htmlFor="course" className="dataI">
                Type
                <select
                  defaultValue={("Select a Course", "Select")}
                  name="course"
                  className="course"
                  placeholder="Select Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  {Types.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <div className="dataI date">
                <label htmlFor="">Start Date</label>
                <Datetime value={start} onChange={(date) => setStart(date)} />
              </div>
              <br />
              <div className="dataI date">
                <label htmlFor="">End Date</label>
                <Datetime value={end} onChange={(date) => setEnd(date)} />
              </div>
              <label htmlFor="course" className="dataI">
                Courses
                <select
                  defaultValue={("Select a Course", "Select")}
                  name="course"
                  className="course"
                  onChange={(e) => setCourse(e.target.value)}
                >
                  {Courses.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="group" className="dataI">
                Group
                <select
                  defaultValue={("Select a Group", "Select")}
                  name="group"
                  className="group"
                  onChange={(e) => setGroup(e.target.value)}
                >
                  {Group.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </form>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="cancelBtn"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="deleteBtn"
                onClick={(e) => {
                  handleSubmit(e);
                  setIsOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
