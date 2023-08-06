// switch svg positions on left arrow click
export default function leftArrowClick(iconPair, setIconPair, numOfIcons) {
  if (numOfIcons) {
    if (iconPair.leftId === 1) {
      setIconPair({ leftId: numOfIcons, rightId: 1 });
    }

    if (iconPair.leftId === numOfIcons) {
      setIconPair({ leftId: numOfIcons - 1, rightId: numOfIcons });
    }

    if (iconPair.leftId > 1 && iconPair.leftId !== numOfIcons) {
      setIconPair((prev) => ({
        leftId: prev.leftId - 1,
        rightId: prev.rightId - 1,
      }));
    }
  }
}
