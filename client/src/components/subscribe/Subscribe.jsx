import { forwardRef } from "react";
import "./Subscribe.css";

const Subscribe = forwardRef(({ text, style }, ref) => {
  const content = (
    <form className="subscribeForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="emailSubscription">
        <input
          type="email"
          name="emailSubscription"
          placeholder="Your email"
          className={`${style + "input"} emailSubscription`}
          ref={ref}
        />
      </label>
      <input type="submit" value={text || "SUBSCRIBE"} className={`${style}  "emailSubmit"`} />
    </form>
  );

  return content;
});

export default Subscribe;
