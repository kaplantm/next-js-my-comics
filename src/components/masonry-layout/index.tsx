import useStyles from "./use-styles";

/**
 * MasonryLayout component
 * Source: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99
 */
const MasonryLayout = ({
  columns = 3,
  gap = 20,
  children,
}: {
  columns?: number;
  gap?: number;
  children: React.ReactNode[];
}) => {
  const classes = useStyles();
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div
        className={classes.imageMatte}
        style={{ marginBottom: `${gap}px` }}
        key={`column${columnIndex}${i}`}
      >
        {children[i]}
      </div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        key={`column${i}`}
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return <div className={classes.masonryContainer}>{result}</div>;
};

export default MasonryLayout;
