import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Arrow, Svg } from "../svg";
import { leftArrowClick, rightArrowClick, ARROW_PATHS } from "../../../utils";
import {
  PathsInterface,
  SvgPathsInterface,
  IconsInterface,
  DegInterface,
} from "../../../interfaces";

interface WheelSectionProps {
  moveWheel: (wheelDeg: number, sectionName: string) => void;
  pathsDef: PathsInterface;
  svgObj: SvgPathsInterface;
  activeSection: string;
}

export default function WheelSection({
  moveWheel,
  pathsDef,
  svgObj,
  activeSection,
}: WheelSectionProps) {
  const [innerLeftHover, setInnerLeftHover] = useState<boolean>(false);
  const [innerRightHover, setInnerRightHover] = useState<boolean>(false);

  const [finalLeftHover, setFinalLeftHover] = useState<boolean>(false);
  const [finalRightHover, setFinalRightHover] = useState<boolean>(false);

  const [iconPair, setIconPair] = useState<{ leftId: number; rightId: number }>(
    { leftId: 1, rightId: 2 }
  );

  const emptyIconPlaceholder = {
    width: 0,
    d: "",
    viewBox: "",
    name: "",
    link: "",
  };

  const [leftIcon, setLeftIcon] =
    useState<IconsInterface>(emptyIconPlaceholder);
  const [rightIcon, setRightIcon] =
    useState<IconsInterface>(emptyIconPlaceholder);

  // total number of icons
  let numOfIcons: number;

  // make only 2(or any number) or more icons loop
  // if (svgObj.icons.length > 2) {
  numOfIcons = svgObj.icons.length;
  // }

  const {
    sectionName,
    wheelDeg,
    outer,
    innerLeft,
    innerRight,
    finalLeft,
    finalRight,
    translateDeg,
    leftArrowPos,
    rightArrowPos,
    arrowRotateDeg,
  } = pathsDef;

  // find the pair of icons to fill the wheel
  useEffect(() => {
    setLeftIcon(
      svgObj.icons.find((icon: IconsInterface) => icon.id === iconPair.leftId)!
    );
    setRightIcon(
      svgObj.icons.find((icon: IconsInterface) => icon.id === iconPair.rightId)!
    );
  }, [iconPair]);

  return (
    <g>
      <g className="cf-arcs">
        <path onClick={() => moveWheel(wheelDeg, sectionName)} d={outer} />

        {/* redirect to link onclick if available */}
        {leftIcon?.link ? (
          <a href={leftIcon.link} target="_blank" rel="noopener noreferrer">
            <motion.path
              d={innerLeft}
              onHoverStart={() => setInnerLeftHover(true)}
              onHoverEnd={() => setInnerLeftHover(false)}
            />
          </a>
        ) : (
          <motion.path
            d={innerLeft}
            onHoverStart={() => setInnerLeftHover(true)}
            onHoverEnd={() => setInnerLeftHover(false)}
          />
        )}
        {rightIcon?.link ? (
          <a href={rightIcon.link} target="_blank" rel="noopener noreferrer">
            <motion.path
              d={innerRight}
              onHoverStart={() => setInnerRightHover(true)}
              onHoverEnd={() => setInnerRightHover(false)}
            />
          </a>
        ) : (
          <motion.path
            d={innerRight}
            onHoverStart={() => setInnerRightHover(true)}
            onHoverEnd={() => setInnerRightHover(false)}
          />
        )}

        {/* paths for the arrow containers */}
        {/* <g> */}
        <motion.path
          d={finalLeft}
          onHoverStart={() => setFinalLeftHover(true)}
          onHoverEnd={() => setFinalLeftHover(false)}
          onClick={() => leftArrowClick(iconPair, setIconPair, numOfIcons)}
        />
        {/* </g> */}

        <motion.path
          onHoverStart={() => setFinalRightHover(true)}
          onHoverEnd={() => setFinalRightHover(false)}
          d={finalRight}
          onClick={() => rightArrowClick(iconPair, setIconPair, numOfIcons)}
        />
      </g>

      <g transform={`translate(${translateDeg})`}>
        {/* main section icon */}
        <Svg deg={svgObj.deg} sectionName={activeSection} path={svgObj.main} />

        {/* left and right icons and redirectable if link is available */}
        {leftIcon &&
          (leftIcon.link ? (
            <a href={leftIcon.link} target="_blank" rel="noopener noreferrer">
              <Svg
                key={leftIcon.name}
                deg={svgObj.deg}
                sectionName={activeSection}
                path={leftIcon}
                placeDir={"left"}
                hover={innerLeftHover}
              />
            </a>
          ) : (
            <Svg
              key={leftIcon.name}
              deg={svgObj.deg}
              sectionName={activeSection}
              path={leftIcon}
              placeDir={"left"}
              hover={innerLeftHover}
            />
          ))}

        {rightIcon &&
          (rightIcon.link ? (
            <a href={rightIcon.link} target="_blank" rel="noopener noreferrer">
              <Svg
                key={rightIcon.name}
                deg={svgObj.deg}
                sectionName={activeSection}
                path={rightIcon}
                placeDir={"right"}
                hover={innerRightHover}
              />
            </a>
          ) : (
            <Svg
              key={rightIcon.name}
              deg={svgObj.deg}
              sectionName={activeSection}
              path={rightIcon}
              placeDir={"right"}
              hover={innerRightHover}
            />
          ))}

        {/* left and right arrows for switching icons */}
        <Arrow
          hover={finalLeftHover}
          path={ARROW_PATHS.leftArrow}
          pos={leftArrowPos}
          deg={arrowRotateDeg}
          svgDeg={svgObj.deg[activeSection as keyof DegInterface]}
          innerPathHover={innerLeftHover}
          name={leftIcon.name || "left arrow"}
          arrowClick={() => leftArrowClick(iconPair, setIconPair, numOfIcons)}
        />

        <Arrow
          hover={finalRightHover}
          path={ARROW_PATHS.rightArrow}
          pos={rightArrowPos}
          deg={arrowRotateDeg}
          svgDeg={svgObj.deg[activeSection as keyof DegInterface]}
          innerPathHover={innerRightHover}
          name={rightIcon.name || "right arrow"}
          arrowClick={() => rightArrowClick(iconPair, setIconPair, numOfIcons)}
        />

        {/* <svg
          width={200}
          x={leftArrowPos.x}
          y={leftArrowPos.y}
          viewBox="-100 -100 900 500"
        >
          <circle cx={150} cy={150} r={190}></circle>
          <text
            x={150}
            y={150}
            fill="white"
            fontSize={19}
            textAnchor="middle"
            dominantBaseline={"central"}
          >
            {name}
          </text>
        </svg> */}
      </g>
    </g>
  );
}
