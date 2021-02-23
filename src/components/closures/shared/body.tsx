import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          color={character.loading ? "secondary" : "textPrimary"}
        >
          Character Name:{" "}
          {character.loading
            ? "Loading..."
            : character.data.name || "Character Not Found"}
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
              (imageSrc ? (
                <img src={imageSrc} />
              ) : (
                "First Issue Cover Not Found"
              ))}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default ClosuresBody;
