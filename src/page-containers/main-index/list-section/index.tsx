import { memo } from "react";
import { getIssueRoute } from "@lib/constants/routes";
import { Box } from "@material-ui/core";
import ListIndex from "@page-containers/comic-list-index/index";
import { ComicWithMetadataListIssuesType } from "../helpers";

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
  const listData = Object.values(groupData.issues);
  return (
    <Box mt={3}>
      <ListIndex listData={listData} headerLabel={headerLabel} />
    </Box>
  );
};

export default memo(ListSection);
