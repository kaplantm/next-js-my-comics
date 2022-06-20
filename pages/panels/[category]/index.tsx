import {
  getPanelCategories,
  getPanelsInCategory,
} from '@lib/utils/static-comics/utils';
import React from 'react';
import Panels from '@page-containers/panels/category';
import { reactsPage } from '@lib/constants';

const fitlerablePages = [reactsPage];

// TODO: arrows to move to next image
const PanelsCategoryPage = props => (
  <Panels
    {...props}
    // eslint-disable-next-line react/destructuring-assignment
    filterable={fitlerablePages.includes(props.params.category)}
  />
);

export const getStaticPaths = async () => {
  const paths = (await getPanelCategories()).map(category => ({
    params: { category },
  }));
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { category: string };
}) {
  const imagePaths = await getPanelsInCategory(params.category);

  return {
    props: {
      params,
      // imagePaths: shuffleArray(imagePaths || []), //shuffled order at build time
      imagePaths: imagePaths.reverse(),
    },
  };
}

export default PanelsCategoryPage;
