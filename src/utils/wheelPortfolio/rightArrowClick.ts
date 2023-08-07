// switch svg icon positions on right arrow click
export default function rightArrowClick(
  iconPair: { leftId: number; rightId: number },
  setIconPair: (prev: object) => void,
  numOfIcons: number
) {
  if (numOfIcons) {
    if (iconPair.rightId < numOfIcons) {
      setIconPair((prev: { leftId: number; rightId: number }) => ({
        leftId: prev.leftId + 1,
        rightId: prev.rightId + 1,
      }));
    }

    if (iconPair.rightId === numOfIcons) {
      setIconPair({ leftId: numOfIcons, rightId: 1 });
    }

    if (iconPair.leftId === numOfIcons) {
      setIconPair({ leftId: 1, rightId: 2 });
    }
  }
}
