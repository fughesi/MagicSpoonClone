import "./Subscribe.css";

export default function Subscribe({ text }) {
  const content = (
    <form action="" className="subscribeForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="emailSubscription">
        <input type="email" id="emailSubscription" placeholder="Your email" />
      </label>
      <input type="submit" value={text || "SUBSCRIBE"} className="emailSubmit" />
    </form>
  );

  return content;
}
