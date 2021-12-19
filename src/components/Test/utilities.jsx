import { colors } from "./colors";

const pickIndex = funnyStringArr => {
  let randomIndex = Math.floor(Math.random() * (funnyStringArr.length - 0) + 0);
  return randomIndex;
};

const colorPicker = index => {
  let randomIndex = Math.floor(Math.random() * (colors.length - 0) + 0);
  return colors[randomIndex];
};

export const highlightLetter = (funnyStringArr, callback) => {
  let coloredStringArr = [...funnyStringArr];
  let bulkIndex = pickIndex(funnyStringArr);
  coloredStringArr.splice(
    bulkIndex,
    1,
    <span
      key={funnyStringArr[bulkIndex]}
      style={{ color: colorPicker(bulkIndex), fontWeight: "800" }}
    >
      {coloredStringArr[bulkIndex]}
    </span>
  );
  callback(coloredStringArr);
};
