import { forwardRef } from "react";
import "./Subscribe.css";

const Subscribe = forwardRef(({ text, style }, ref) => {
  const content = (
    <form action="" className="subscribeForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="emailSubscription">
        <input
          type="email"
          id="emailSubscription"
          placeholder="Your email"
          className={`${style + "input"}`}
          ref={ref}
        />
      </label>
      <input type="submit" value={text || "SUBSCRIBE"} className={`${style}  "emailSubmit"`} />
    </form>
  );

  return content;
});

export default Subscribe;

// import { useRef, useEffect } from "react";
// import "./Subscribe.css";

// export default function Subscribe({ text, style }) {
//   const inputFocus = useRef();

//   useEffect(() => {
//     inputFocus.current?.focus();
//   }, []);

//   // console.log(inputFocus.current.focus());
//   const content = (
//     <form action="" className="subscribeForm" onSubmit={(e) => e.preventDefault()}>
//       <label htmlFor="emailSubscription">
//         <input
//           type="email"
//           id="emailSubscription"
//           placeholder="Your email"
//           className={`${style + "input"}`}
//           ref={inputFocus}
//         />
//       </label>
//       <input type="submit" value={text || "SUBSCRIBE"} className={`${style}  "emailSubmit"`} />
//     </form>
//   );

//   return content;
// }
