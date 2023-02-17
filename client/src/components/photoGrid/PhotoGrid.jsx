import { cg1, cg2, cg3, cg4 } from "../../assets/img/cerealGrid/__exports";

import "./PhotoGrid.css";

export default function PhotoGrid() {
  const content = (
    <div className="photoGridContainer">
      <img src={cg1} alt="picture of cereal 1" />
      <img src={cg2} alt="picture of cereal 2" />
      <img src={cg3} alt="picture of cereal 3" />
      <img src={cg4} alt="picture of cereal 4" />
    </div>
  );

  return content;
}
