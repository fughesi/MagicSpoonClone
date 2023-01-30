import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../../features/themeSlice";
import "./Darkmode.css";

export default function Darkmode() {
  const dispatch = useDispatch();

  const dark = useSelector((state) => state.theme.darkMode);

  console.log(dark);
  const content = (
    <div className={`darkmode-btn ${dark ? "darkmode-btn_on" : ""}`} onClick={() => dispatch(setDarkMode())}>
      <div className="darkmode-ball"></div>
    </div>
  );

  return content;
}
