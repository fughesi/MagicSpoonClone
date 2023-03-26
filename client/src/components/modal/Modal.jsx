import { useRef, useEffect, useState } from "react";
import "./Modal.css";

export default function Modal({ productModal, handleClick }) {
  // const modalRef = useRef();

  const modalRef = useRef();

  const [bbox, setBbox] = useState({});

  const set = () => setBbox(modalRef && modalRef.current ? modalRef.current.getBoundingClientRect() : {});

  useEffect(() => {
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  // console.log(bbox);

  const content = productModal && (
    <div className="modalContainer" onClick={handleClick}>
      <div className="modalWrapper"></div>

      <button className="leftModalButton" ref={modalRef} onClick={() => console.log("clicked")}>
        &lt;
      </button>
      <div className="modalContent" anchorbbox={bbox}>
        MODAL
      </div>
      <button className="rightModalButton" onClick={() => console.log("clicked")}>
        &gt;
      </button>
    </div>
  );

  return content;
}
