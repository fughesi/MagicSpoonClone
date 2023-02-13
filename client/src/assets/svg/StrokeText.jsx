export default function StrokeText({ text }, props) {
  const content = (
    <svg viewBox="0 0 10 2" {...props}>
      <text
        x="5"
        y="1.5"
        textAnchor="middle"
        fontSize=".6"
        fill="none"
        strokeWidth=".015"
        stroke="#fff"
        fontFamily="Oswald"
      >
        {text || "add a 'text' prop with some text"}
      </text>
    </svg>
  );

  return content;
}
