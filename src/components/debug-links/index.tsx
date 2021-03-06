import { memo } from 'react';
import AppLink from '@components/app-link';
import { isDevMode } from '@lib/utils';
import { IconButton } from '@material-ui/core';
import { Edit, Image } from '@material-ui/icons';

const DebugLinks = ({
  baseLink,
  noEdit,
}: {
  baseLink: string;
  noEdit?: boolean;
}) => {
  if (!isDevMode) {
    return null;
  }
  return (
    <div>
      {!noEdit && (
        <AppLink nextProps={{ href: `${baseLink}/debug/edit` }} isExternal>
          <IconButton component="div">
            <Edit />
          </IconButton>
        </AppLink>
      )}
      <AppLink
        nextProps={{
          href: `${baseLink}/debug/edit/images`,
        }}
        isExternal
      >
        <IconButton component="div">
          <Image />
        </IconButton>
      </AppLink>
    </div>
  );
};

const DebugLinksMemo = memo(DebugLinks);
export default DebugLinksMemo;
