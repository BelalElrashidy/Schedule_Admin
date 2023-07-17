function Selector({ setIsOpen, setGroup, filter, data }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{data[0].value}</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <span>&times;</span>
          </button>
          <div className="modalContent">
            {data.map((option) => (
              <div
                className="modal-group"
                key={option.value}
                value={option.value}
                onClick={() => {
                  setGroup(option.value);
                  filter();
                }}
              >
                {option.label}
              </div>
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
              <button
                className="deleteBtn"
                onClick={() => {
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

export default Selector;
