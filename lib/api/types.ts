export type Identifier = {
  id: number;
};

export type IdentifierQuery = {
  id: string;
};

export type CreateSeriesRequestType = {
  title: string;
  start: string;
  end?: string;
  link: string;
  description: string;
};

export type UpdateSeriesRequestType = CreateSeriesRequestType & Identifier;

export type CreateArcRequestType = {
  title: string;
  start: string;
  end?: string;
  link: string;
  description: string;
};

export type UpdateArcRequestType = CreateArcRequestType & Identifier;

export type CreateIssueRequestType = {
  title: string;
  start: string;
  issueNumber: number;
  link: string;
  description: string;
  arcId?: number;
  seriesId: number;
};

export type UpdateIssueRequestType = CreateIssueRequestType & Identifier;

// https://www.prisma.io/docs/reference/api-reference/error-reference
export const prismaErrorCodesMap = {
  P2025: 404, // "An operation failed because it depends on one or more records that were required but not found. {cause}"
  P2002: 409, // "Unique constraint failed on the {constraint}"
};
