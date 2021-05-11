import {
  getPanelCategories,
  getPanelsInCategory,
} from '@lib/utils/static-comics/utils';
import React from 'react';
import DebugAddImages from '@page-containers/debug-add-images';
import { reactsPage } from '@lib/constants';

// TODO: arrows to move to next image
const PanelsCategoryPage = props => (
  <DebugAddImages
    {...props}
    maxDimension={props.params.category === reactsPage ? 150 : null}
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
      imagePaths,
    },
  };
}

export default PanelsCategoryPage;
