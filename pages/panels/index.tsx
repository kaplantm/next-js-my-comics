import React from "react";
import PanelsIndex from "@page-containers/panels";
import { getPanelCategories } from "@lib/utils/static-comics/utils";

const PanelsIndexPage = (props) => <PanelsIndex {...props} />;

export async function getStaticProps() {
  const categories = await getPanelCategories();

  return {
    props: {
      categories,
    },
  };
}

export default PanelsIndexPage;
