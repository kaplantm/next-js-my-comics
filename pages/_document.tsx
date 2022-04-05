import BaseDocument from 'next/document';
import { withEmotionCache } from 'tss-react/nextJs';
import { createMuiCache } from './_app';

// Based on https://github.com/garronej/tss-react/blob/main/src/test/apps/ssr/pages/_document.tsx
export default withEmotionCache({
  Document: BaseDocument,
  getCaches: () => [createMuiCache()],
});
