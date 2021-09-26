import { getPanelsInCategory } from '@lib/utils/static-comics/utils';
import React from 'react';
import DebugAddImages from '@page-containers/debug-add-images';
import { reactsPage } from '@lib/constants';
import {
  getAllStandalonePanels,
  getStandalonePanels,
} from '@lib/utils/api-client';

const PanelsCategoryPage = props => (
  <DebugAddImages
    {...props}
    // eslint-disable-next-line react/destructuring-assignment
    maxDimension={props.params.category === reactsPage ? 150 : null}
  />
);

export const getStaticPaths = async () => {
  const categories = (await getAllStandalonePanels())?.response?.data;
  const paths = categories.map(c => ({
    params: { category: c.name },
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
  const categories = (await getAllStandalonePanels())?.response?.data;
  const id = categories.find(c => c.name === params.category)?.id;
  const images = id
    ? (await getStandalonePanels(`${id}`))?.response?.data?.images || []
    : [];
  const imagePaths = images.map(i => i.imageUrl);

  return {
    props: {
      params,
      id,
      imagePaths,
    },
  };
}

export default PanelsCategoryPage;
