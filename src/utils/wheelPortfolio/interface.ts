export interface PathsInterface {
  pathsDef: {
    sectionName: string;
    wheelDeg: number;
    outer: string;
    innerLeft: string;
    innerRight: string;
    finalLeft: string;
    finalRight: string;
    translateDeg: string;
    leftArrowPos: { x: number; y: number };
    rightArrowPos: { x: number; y: number };
    arrowRotateDeg: number;
  };
}

export interface SvgPathsInterface {
  sectionName: string;
  deg: DegInterface;
  main: MainInterface;
  icons: IconsInterface[];
}

export interface MainInterface {
  width: number;
  viewBox: string;
  x: number;
  y: number;
  d: string;
}

export interface DegInterface {
  main: number;
  expertise: number;
  projects: number;
  ongoing: number;
  contact: number;
}

export interface IconsInterface {
  width: number;
  x?: number;
  y?: number;
  d: string;
  viewBox: string;
  leftPos?: { x: number; y: number };
  rightPos?: { x: number; y: number };
  link?: string;
  name: string;
}
