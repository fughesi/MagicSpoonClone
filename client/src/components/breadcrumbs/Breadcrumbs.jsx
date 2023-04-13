import { useLocation, Link } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((i) => i !== "")
    .map((i, index) => {
      currentLink += `/${i}`;
      return (
        <Link to={currentLink} className="breadcrumbs" key={index}>
          {i}
        </Link>
      );
    });

  return <div className={crumbs.length ? "breadcrumbsContainer" : " displayNone"}>{crumbs} </div>;
}
