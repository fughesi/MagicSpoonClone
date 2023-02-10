import { lazy } from "react";

const img1 = lazy(() => import("./cereal-1.png"));
const img2 = lazy(() => import("./cereal-2.png"));
const img3 = lazy(() => import("./cereal-3.png"));
const img4 = lazy(() => import("./cereal-4.png"));
const img5 = lazy(() => import("./cereal-5.png"));
const img6 = lazy(() => import("./cereal-6.png"));
const img7 = lazy(() => import("./cereal-7.png"));

export { img1, img2, img3, img4, img5, img6, img7 };
