import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import {
  comicVineCharacterType,
  comicVineIssueType,
  loadingEnum,
} from "../../../lib/types";

function ClosuresBody({
  character,
  firstIssue,
}: {
  character: {
    data: comicVineCharacterType;
    loading: loadingEnum;
  };
  firstIssue: {
    data: comicVineIssueType;
    loading: loadingEnum;
  };
}) {
  const imageSrc = firstIssue.data?.image?.original_url;
  const characterName = character.data?.name || "Character Not Found";
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        component="h1"
        color={character.loading ? "secondary" : "textPrimary"}
      >
        Character Name: {character.loading ? "Loading..." : characterName}
      </Typography>
      {firstIssue.loading !== loadingEnum.NOT_STARTED && (
        <Typography
          variant="h4"
          component="h1"
          color={firstIssue.loading ? "secondary" : "textPrimary"}
        >
          First issue:
          <br />
          {!!firstIssue.loading && "Loading..."}
          {firstIssue.loading === loadingEnum.COMPLETE &&
            (imageSrc ? <img src={imageSrc} /> : "First Issue Cover Not Found")}
        </Typography>
      )}
    </Container>
  );
}

export default ClosuresBody;
