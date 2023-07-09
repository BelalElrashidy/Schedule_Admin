function Selector({ setIsOpen, data }) {
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
            {data.map((option) => (
              <option
                className="modal-groups"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
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
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selector;
