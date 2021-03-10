import { fade, makeStyles } from "@material-ui/core/styles";
import * as Colors from "../../../theme/colors";
import { categoriesEnum } from "../list-items";

type styleConfigType = {
  category: categoriesEnum;
};

const categoryColorMap: { [key in categoriesEnum]: string } = {
  [categoriesEnum.next]: Colors.toxicGreen,
  [categoriesEnum.material]: Colors.medLightBlue,
  [categoriesEnum.hooks]: Colors.paleRed,
  [categoriesEnum.tinyMce]: Colors.lightYellow,
  [categoriesEnum.axios]: Colors.darkBlue,
  [categoriesEnum.utils]: Colors.stone,
  [categoriesEnum.javscript]: Colors.purple,
  [categoriesEnum.react]: Colors.lightPastelGreen,
  [categoriesEnum.other]: Colors.orange,
  [categoriesEnum.resources]: Colors.lavender,
};

const useStyles = makeStyles((theme) => ({
  chip: {
    transition: "border-color .2s",
    letterSpacing: ".05em",
    fontWeight: 600,
    marginLeft: theme.spacing(0.75),
    marginTop: theme.spacing(0.5),
    backgroundColor: ({ category }: styleConfigType) =>
      fade(categoryColorMap[category] || Colors.lightGrey, 0.3),
    border: ({ category }: styleConfigType) =>
      `2px solid ${fade(categoryColorMap[category] || Colors.lightGrey, 0.25)}`,
    "&:hover": {
      backgroundColor: ({ category }: styleConfigType) =>
        fade(categoryColorMap[category] || Colors.lightGrey, 0.5),
      border: "2px solid transparent",
    },
  },
  active: {
    backgroundColor: ({ category }: styleConfigType) =>
      fade(categoryColorMap[category] || Colors.lightGrey, 0.4),
    border: ({ category }: styleConfigType) =>
      `2px solid ${categoryColorMap[category] || Colors.lightGrey}`,
  },
}));

export default useStyles;
