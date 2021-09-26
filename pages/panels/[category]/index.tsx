import {
  getPanelCategories,
  getPanelsInCategory,
} from '@lib/utils/static-comics/utils';
import React from 'react';
import Panels from '@page-containers/panels/category';
import { reactsPage } from '@lib/constants';
import {
  getAllStandalonePanels,
  getStandalonePanels,
} from '@lib/utils/api-client';

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
  const categories = (await getAllStandalonePanels())?.response?.data;
  const paths = categories.map(c => ({
    params: { category: c.name },
  }));
  console.log('!!!!!', { paths });
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
      // imagePaths: shuffleArray(imagePaths || []), //shuffled order at build time
      imagePaths: imagePaths.reverse(),
    },
  };
}

export default PanelsCategoryPage;
