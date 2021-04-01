import { memo } from "react";
import { getIssueRoute } from "@lib/constants/routes";
import { Box } from "@material-ui/core";
import ListIndex from "@page-containers/comic-list-index/index";
import { allStaticComicsWithListIssuesType } from "../helpers";

const ListSection = ({
  groupData,
  headerLabel,
}: {
  groupData: allStaticComicsWithListIssuesType;
  headerLabel: string;
}) => {
  if (!groupData.issues.length) {
    return null;
  }
  const listData = groupData.issues.map(({ params, comic }) => ({
    link: {
      pathname: getIssueRoute(params.series, params.issueNumber),
      name: comic.frontMatter.title,
    },
    comic,
  }));
  return (
    <Box mt={3}>
      <ListIndex listData={listData} headerLabel={headerLabel} />
    </Box>
  );
};

export default memo(ListSection);
