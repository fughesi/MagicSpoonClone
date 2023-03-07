import "./Modal.css";

export default function Modal() {
  const content = (
    <div className="modalContainer">
      <div className="modalWrapper"></div>

      <button className="leftModalButton" onClick={() => console.log("clicked")}>
        &lt;
      </button>
      <div className="modalContent">MODAL</div>
      <button className="rightModalButton" onClick={() => console.log("clicked")}>
        &gt;
      </button>
    </div>
  );

  return content;
}
