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
};

const useStyles = makeStyles((theme) => ({
  chip: {
    letterSpacing: ".05em",
    fontWeight: 600,
    marginLeft: theme.spacing(0.75),
    marginTop: theme.spacing(0.5),
    backgroundColor: ({ category }: styleConfigType) =>
      fade(categoryColorMap[category] || Colors.lightGrey, 0.3),
  },
}));

export default useStyles;
