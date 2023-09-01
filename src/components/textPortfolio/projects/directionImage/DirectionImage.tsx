import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./DirectionImage.css";

interface CursorXYInterface {
  x: number | null;
  y: number | null;
}

export default function DirectionImage({
  imageSrc,
  text,
}: {
  imageSrc: string;
  text: string;
}) {
  const [hoverStatus, setHoverStatus] = useState<"in" | "out">("out");
  const [cursorXY, setCursorXY] = useState<CursorXYInterface>({
    x: null,
    y: null,
  });
  const listRef = useRef<HTMLInputElement>(null);

  let w: number | undefined,
    h: number | undefined,
    l: number | undefined,
    t: number | undefined;

  useEffect(() => {
    let box = listRef?.current;
    w = box?.offsetWidth;
    h = box?.offsetHeight;
    l = box?.offsetLeft;
    // l = box?.getBoundingClientRect().left;
    // t = box?.offsetTop;
    t = box?.getBoundingClientRect().top;
  });

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorXY({ x, y });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  function getDirection(pos: CursorXYInterface): string {
    const directions = ["-top", "-right", "-bottom", "-left"];

    const x = pos.x! - l! - (w! / 2) * (w! > h! ? h! / w! : 1);
    const y = pos.y! - t! - (h! / 2) * (h! > w! ? w! / h! : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return directions[d];
  }

  function addClass(pos: CursorXYInterface, status: "in" | "out") {
    const direction = getDirection(pos);

    listRef.current!.className = "";
    listRef?.current!.classList.add(status + direction);
  }

  useEffect(() => {
    addClass(cursorXY, hoverStatus);
  }, [hoverStatus]);

  return (
    // <div className="wrap">
    <ul className="-center" style={{ background: "", borderRadius: "1rem" }}>
      <motion.li
        id="list"
        ref={listRef}
        onHoverStart={() => setHoverStatus("in")}
        onHoverEnd={() => setHoverStatus("out")}
        // style={{ background: "coral", borderRadius: "1rem" }}
      >
        <div className="w">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoverStatus === "out" ? 1 : 0 }}
            style={{ borderRadius: "1rem" }}
            className="f"
          >
            {/* <svg viewBox="0 0 180 180" style={{ borderRadius: "2rem" }}>
                  <image
                    xlinkHref={imageSrc}
                    preserveAspectRatio="xMidYMid slice"
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: "2rem" }}
                  />
                </svg> */}
            <img
              style={{ borderRadius: "1rem" }}
              src={imageSrc}
              width={"100%"}
              height={"100%"}
              alt={text + "project image"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoverStatus === "in" ? 1 : 0 }}
            style={{ borderRadius: "1rem" }}
            className="b"
          >
            <h1>{text.toUpperCase()}</h1>
          </motion.div>
        </div>
      </motion.li>
    </ul>
    // </div>
  );
}
