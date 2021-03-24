import { Typography } from "@material-ui/core";
/* eslint-disable import/prefer-default-export */
import { Entry } from "contentful";
import React from "react";

export function getContentType(e: Entry<any>) {
  return e?.sys?.contentType?.sys?.id;
}

/**
 * Attempts to return a list of entries as renderable components
 * Supported components are defined by the getComponent function param
 * @param entries the list of entries
 * @param additionalProps properties that are passedto every created component
 */
export function nodeArrayToComponents(
  entries: Entry<any>[],
  getComponent: (
    contentType: string
  ) => (
    props: {
      entry: Entry<any>;
      key: string;
    } & any
  ) => JSX.Element,
  additionalProps: any = {}
) {
  if (!entries?.length) {
    return null;
  }
  return entries.map((entry: Entry<any>, index) => {
    const contentTypeResult = getContentType(entry);
    const Component = getComponent(contentTypeResult);
    const key = entry?.sys?.id;

    if (!key || !Component) {
      return (
        <Typography color="error">
          Unhandled section contentType {contentTypeResult}
        </Typography>
      );
    }
    return <Component entry={entry} {...additionalProps} key={key} />;
  });
}
