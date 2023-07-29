import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LeftArrow, RightArrow, Svg } from "../svg";
import { leftArrowClick, rightArrowClick } from "../../../utils";

export default function WheelSection({
  moveWheel,
  pathsDef,
  svgObj,
  activeSection,
}) {
  const [innerLeftHover, setInnerLeftHover] = useState(false);
  const [innerRightHover, setInnerRightHover] = useState(false);

  const [finalLeftHover, setFinalLeftHover] = useState(false);
  const [finalRightHover, setFinalRightHover] = useState(false);

  const [iconPair, setIconPair] = useState({ leftId: 1, rightId: 2 });

  const [leftIcon, setLeftIcon] = useState({});
  const [rightIcon, setRightIcon] = useState({});

  // total number of icons
  let numOfIcons;

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
    setLeftIcon(svgObj.icons.find((icon) => icon.id === iconPair.leftId));
    setRightIcon(svgObj.icons.find((icon) => icon.id === iconPair.rightId));
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
              whileHover={() => setInnerLeftHover(true)}
              onHoverEnd={() => setInnerLeftHover(false)}
            />
          </a>
        ) : (
          <motion.path
            d={innerLeft}
            whileHover={() => setInnerLeftHover(true)}
            onHoverEnd={() => setInnerLeftHover(false)}
          />
        )}
        {rightIcon?.link ? (
          <a href={rightIcon.link} target="_blank" rel="noopener noreferrer">
            <motion.path
              d={innerRight}
              whileHover={() => setInnerRightHover(true)}
              onHoverEnd={() => setInnerRightHover(false)}
            />
          </a>
        ) : (
          <motion.path
            d={innerRight}
            whileHover={() => setInnerRightHover(true)}
            onHoverEnd={() => setInnerRightHover(false)}
          />
        )}

        {/* paths for the arrow containers */}
        {/* <g> */}
        <motion.path
          d={finalLeft}
          whileHover={() => setFinalLeftHover(true)}
          onHoverEnd={() => setFinalLeftHover(false)}
          onClick={() => leftArrowClick(iconPair, setIconPair, numOfIcons)}
        />
        {/* <motion.text x={leftArrowPos.x} y={leftArrowPos.y}>
          oksssllll
        </motion.text> */}
        {/* </g> */}

        <motion.path
          whileHover={() => setFinalRightHover(true)}
          onHoverEnd={() => setFinalRightHover(false)}
          d={finalRight}
          onClick={() => rightArrowClick(iconPair, setIconPair, numOfIcons)}
        />
      </g>

      <g transform={`translate(${translateDeg})`}>
        {/* main section icon */}
        <Svg
          deg={svgObj.deg}
          sectionName={activeSection.name}
          path={svgObj.main}
        />

        {/* left and right icons and redirectable if link is available */}
        {leftIcon &&
          (leftIcon.link ? (
            <a href={leftIcon.link} target="_blank" rel="noopener noreferrer">
              <Svg
                key={leftIcon.name}
                deg={svgObj.deg}
                sectionName={activeSection.name}
                path={leftIcon}
                placeDir={"left"}
                hover={innerLeftHover}
              />
            </a>
          ) : (
            <Svg
              key={leftIcon.name}
              deg={svgObj.deg}
              sectionName={activeSection.name}
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
                sectionName={activeSection.name}
                path={rightIcon}
                placeDir={"right"}
                hover={innerRightHover}
              />
            </a>
          ) : (
            <Svg
              key={rightIcon.name}
              deg={svgObj.deg}
              sectionName={activeSection.name}
              path={rightIcon}
              placeDir={"right"}
              hover={innerRightHover}
            />
          ))}

        {/* left and right arrows for switching icons */}
        <LeftArrow
          hover={finalLeftHover}
          x={leftArrowPos.x}
          y={leftArrowPos.y}
          deg={arrowRotateDeg}
          leftArrowClick={() =>
            leftArrowClick(iconPair, setIconPair, numOfIcons)
          }
          svgDeg={svgObj.deg[activeSection.name]}
          innerPathHover={innerLeftHover}
          name={leftIcon.name}
        />
        <RightArrow
          hover={finalRightHover}
          x={rightArrowPos.x}
          y={rightArrowPos.y}
          deg={arrowRotateDeg}
          rightArrowClick={() =>
            rightArrowClick(iconPair, setIconPair, numOfIcons)
          }
          svgDeg={svgObj.deg[activeSection.name]}
          innerPathHover={innerRightHover}
          name={rightIcon.name}
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
