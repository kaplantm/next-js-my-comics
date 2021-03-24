/* eslint-disable @typescript-eslint/camelcase */
import { Issue, Series } from "@lib/types/contentful-fields";
import { ContentfulClientApi, createClient, Entry } from "contentful";
import contentTypesEnum from "./content-types";

type ContentfulQueryOptionsType = {
  // This type is likely incomplete. See contenful docs if additional query options are needed
  // eslint-disable-next-line max-len
  // https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/#retrieving-entries-with-search-parameters
  // https://contentful.github.io/contentful.js/contentful/latest/ContentfulClientAPI.html#.getEntries
  content_type: contentTypesEnum;
  order:
    | "sys.createdAt"
    | "sys.updatedAt"
    | "-sys.createdAt"
    | "-sys.updatedAt"
    | string; // 'fields.publishedAt' in article pagination
  limit: number;
  skip: number;
  // additional filtering can be done via field matching e.g. { 'fields.path': 'path-to-match' }
  [key: string]: string | number;
};

class ContentfulClientClass {
  previewClient: ContentfulClientApi;

  contentClient: ContentfulClientApi;

  constructor() {
    const space =
      process.env.CONTENTFUL_SPACE_ID ||
      process.env.STORYBOOK_CONTENTFUL_SPACE_ID;

    // CONTENTFUL_CONTENT_ACCESS_TOKEN and CONTENTFUL_PREVIEW_ACCESS_TOKEN should be set in an env file
    const previewClientParams = {
      space,
      accessToken:
        process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ||
        process.env.STORYBOOK_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host: "preview.contentful.com",
    };
    const contentClientParams = {
      space,
      accessToken:
        process.env.CONTENTFUL_ACCESS_TOKEN ||
        process.env.STORYBOOK_CONTENTFUL_CONTENT_ACCESS_TOKEN,
      host: "cdn.contentful.com",
    };

    if (previewClientParams.space && previewClientParams.accessToken) {
      this.previewClient = createClient(previewClientParams);
    }
    if (contentClientParams.space && contentClientParams.accessToken) {
      this.contentClient = createClient(contentClientParams);
    }
  }

  getActiveClient(preview: boolean) {
    return preview ? this.previewClient : this.contentClient;
  }

  async fetchAllEntriesByContentType(
    query: { content_type: string } & Partial<ContentfulQueryOptionsType>,
    preview?: boolean
  ): Promise<Entry<any>[]> {
    const client = this.getActiveClient(preview);

    if (!client) {
      return [];
    }
    return client
      .getEntries({
        order: "-sys.createdAt",
        limit: 50,
        include: 10,
        ...query,
      })
      .then((entries) => {
        if (entries && entries.items && entries.items.length > 0) {
          return entries.items;
        }
        return [];
      })
      .catch((e) => {
        return [];
      });
  }

  /**
   * hard-coded limit, might want to move to a contentful field
   * we only use this on the collection page anyway and on there
   * we only show the first 9 (since they are displayed in groups of 3) initially, this is false pagination
   * to prevent overhitting our article api endpoint
   */
  static ArticlesPerPage = 9;

  // async fetchPaginatedArticles(
  //   offset: number,
  //   opts: {
  //     category?: string;
  //     omitIds: string[];
  //     tag?: string;
  //     preview?: boolean;
  //   }
  // ): Promise<any> {
  //   // TODO: PLSW-1668 handle tags
  //   const { preview, category, omitIds } = opts;
  //   const query: {
  //     content_type: string;
  //   } & Partial<ContentfulQueryOptionsType> = {
  //     content_type: contentTypesEnum.STORY,
  //     order: "-fields.datePublished",
  //     skip: offset,
  //     limit: ContentfulClientClass.ArticlesPerPage,
  //   };
  //   if (category) {
  //     query["fields.category"] = category;
  //   }
  //   if (omitIds && omitIds.length) {
  //     query["sys.id[nin]"] = omitIds.join(",");
  //   }
  //   // TODO: PLSW-1668 fields.primaryTag fields.secondaryTags[in] similar to category
  //   const client = this.getActiveClient(preview);
  //   return client
  //     .getEntries(query)
  //     .then((entries) => entries as EntryCollection<StoryEntry>)
  //     .catch((e) => {
  //       devLog("fetchAllEntriesByContentType", JSON.stringify(e), "error");
  //       return { error: JSON.stringify(e) };
  //     });
  // }

  // async fetchArticleAtPath(
  //   path: string,
  //   preview: boolean
  // ): Promise<{
  //   pageContent: StoryEntry;
  //   pageCollection?: null;
  // }> {
  //   const [pageContent] = (await this.fetchAllEntriesByContentType(
  //     {
  //       content_type: contentTypesEnum.STORY,
  //       limit: 1,
  //       "fields.path": path.toLowerCase(),
  //     },
  //     preview
  //   )) as StoryEntry[];
  //   // article pages do not need to handle collections
  //   return { pageContent };
  // }

  async fetchSeries(slug: string): Promise<Series> {
    const [series] = (await this.fetchAllEntriesByContentType({
      content_type: contentTypesEnum.SERIES,
      limit: 1,
      "fields.slug": slug.toLowerCase(),
    })) as Series[];

    return series;
  }

  async fetchIssue(slug: string): Promise<Issue> {
    const [issue] = (await this.fetchAllEntriesByContentType({
      content_type: contentTypesEnum.ISSUE,
      limit: 1,
      "fields.slug": slug.toLowerCase(),
    })) as Issue[];

    return issue;
  }
}

const ContentfulClient = new ContentfulClientClass();

export default ContentfulClient;
