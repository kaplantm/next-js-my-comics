import { memo } from 'react';
import AppLink from '@components/app-link';
import { isDevMode } from '@lib/utils';
import { IconButton } from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import Image from '@mui/icons-material/Image';

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
          <IconButton component="div" size="large">
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
        <IconButton component="div" size="large">
          <Image />
        </IconButton>
      </AppLink>
    </div>
  );
};

const DebugLinksMemo = memo(DebugLinks);
export default DebugLinksMemo;
