import { useEffect, useState, useRef, useMemo } from "react";
import pic from "../../assets/img/hero-mobile.png";
import "./TestPage.css";

export default function TestPage() {
  const targetRef = useRef(null);

  const [viz, setViz] = useState(false);

  const callBack = (entries) => {
    //first argument to intersectionalObserver
    entries.forEach((i) => {
      setViz((prev) => (prev = i.isIntersecting));
    });
  };
  const options = useMemo(() => {
    //second argument to intersectionalObserver
    return { root: null, rootMargin: "0px", threshold: 0.3 };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);

    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef]);

  return (
    <>
      <h1 className="header">
        <p className={!viz ? "noViewport" : "visible"}> ANIMATED, BITCH</p>
        <div className="gap"></div>
        <img src={pic} alt="image" ref={targetRef} className={!viz ? "noViewport" : "visible"} />
      </h1>
    </>
  );
}
