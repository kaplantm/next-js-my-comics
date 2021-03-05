import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@material-ui/core";
import LoaderButton from "../../components/loader-button";
import { useIsMounted } from "../../lib/hooks/use-is-mounted";
import { appAxios, sleep } from "../../lib/utils";
import {
  comicVineCharacterType,
  comicVineResponse,
  loadingEnum,
} from "../../lib/types";

function IsMounted({ isBad }: { isBad: boolean }) {
  const [charactersState, setCharactersState] = useState<{
    data: comicVineCharacterType[];
    loading: loadingEnum;
  }>({
    data: null,
    loading: loadingEnum.NOT_STARTED,
  });
  const isMountedChecker = useIsMounted();
  const [loadingButtons, setLoadingButtons] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    async function getCharacter() {
      setCharactersState({
        data: null,
        loading: loadingEnum.LOADING,
      });
      const result = await appAxios<
        comicVineResponse<comicVineCharacterType[]>
      >({
        method: "get",
        url: `api/comics/characters/`,
        params: {
          field_list: "id,name,image,first_appeared_in_issue,site_detail_url",
          limit: 5,
          filter: "name:Alfred",
        },
      });

      setCharactersState({
        data: result.response?.data?.results,
        loading: loadingEnum.COMPLETE,
      });
    }
    getCharacter();
  }, []);

  async function goToComicVine(url: string, id: string) {
    setLoadingButtons((prev) => ({ ...prev, [id]: true }));
    await sleep(3000); // any async action could go here (e.g. maybe you're saving a post then redirecting)
    // If we don't check if this component is still mounted, this push might execute after the user has navigated away
    // and thats very confusing
    if (isBad || isMountedChecker()) {
      setLoadingButtons((prev) => ({ ...prev, [id]: false }));
      window.open(url, "_blank");
    }
  }

  console.log({ charactersState });
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        component="h1"
        color={charactersState.loading ? "secondary" : "textPrimary"}
      >
        {!!charactersState.loading && "Loading..."}
      </Typography>
      {!charactersState.loading &&
        !!charactersState.data?.length &&
        charactersState.data.map((character) => {
          const characterName = character.name || "Character Not Found";
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              key={character.id}
            >
              <Typography variant="h4" component="h1">
                Character Name: {characterName}
              </Typography>
              <LoaderButton
                loading={loadingButtons[character.id]}
                onClick={() =>
                  goToComicVine(character.site_detail_url, character.id)
                }
              >
                Open Comic Vine
              </LoaderButton>
            </Box>
          );
        })}
    </Container>
  );
}

export default IsMounted;
