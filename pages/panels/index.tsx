import React from 'react';
import PanelsIndex from '@page-containers/panels';
import { getAllStandalonePanels } from '@lib/utils/api-client';

const PanelsIndexPage = props => <PanelsIndex {...props} />;

export async function getStaticProps() {
  const categories = (await getAllStandalonePanels())?.response?.data;

  return {
    props: {
      categories: categories?.length ? categories.map(c => c.name) : [],
    },
  };
}

export default PanelsIndexPage;
