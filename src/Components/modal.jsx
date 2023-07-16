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

  const handleSubmit = (e) => {
    e.preventDefault();
    AddEvent({
      title,
      Name,
      start,
      end,
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
  const Courses = [
    { value: "Select year", label: "Select year" },
    { value: "B22", label: "B22" },
    { value: "B21", label: "B21" },
    { value: "B20", label: "B20" },
    { value: "B219", label: "B19" },
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
                    // console.log(e.target.value);
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
              <div className="dataI date">
                <label htmlFor="">Start Date</label>
                <Datetime value={start} onChange={(date) => setStart(date)} />
              </div>
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
