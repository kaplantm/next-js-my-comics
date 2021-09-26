export const allIssuesEndpoint = `/api/issues`;
export const getIssueEndpoint = (id: string) => `/api/issues/${id}`;
export const allSeriesEndpoint = `/api/series`;
export const getSeriesEndpoint = (id: string) => `/api/series/${id}`;
export const getIssueBySeriesAndNumberEndpoint = (
  seriesId: string,
  issueNumber: string
) => `/api/series/${seriesId}/issues/${issueNumber}`;
export const allArcsEndpoint = `/api/arcs`;
export const getArcEndpoint = (id: string) => `/api/arcs/${id}`;
export const allPanelsEndpoint = `/api/panels`;
export const getPanelsEndpoint = (id: string) => `/api/panels/${id}`;
