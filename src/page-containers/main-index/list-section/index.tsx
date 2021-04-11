import { memo } from "react";
import { Box } from "@material-ui/core";
import ListIndex from "@page-containers/comic-list-index/index";
import { ComicWithMetadataListIssuesType } from "../helpers";
import { isAOneShot } from "@lib/constants";

const ListSection = ({
  groupData,
  headerLabel,
}: {
  groupData: ComicWithMetadataListIssuesType;
  headerLabel: string;
}) => {
  if (!groupData.issues.length) {
    return null;
  }
  const listData = Object.values(groupData.issues).map((item) => ({
    ...item,
    link: {
      pathname: item.link.pathname,
      name: `${isAOneShot(item.params.series) ? "" : item.params.series} ${
        item.link.name
      }`,
    },
  }));

  return (
    <Box mt={3}>
      <ListIndex listData={listData} headerLabel={headerLabel} />
    </Box>
  );
};

export default memo(ListSection);
