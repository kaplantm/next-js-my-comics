import React, { useEffect, useState } from "react";
import { appAxios } from "../../../lib/utils";
import ClosuresBody from "../shared/body";
import {
  comicVineCharacterType,
  comicVineIssueType,
  comicVineResponse,
  loadingEnum,
} from "../../../lib/types";

function ClosuresBad() {
  const [characterState, setCharacterState] = useState<{
    data: comicVineCharacterType;
    loading: loadingEnum;
  }>({
    data: null,
    loading: loadingEnum.NOT_STARTED,
  });
  const [firstIssueState, setFirstIssueState] = useState<{
    data: comicVineIssueType;
    loading: loadingEnum;
  }>({
    data: null,
    loading: loadingEnum.NOT_STARTED,
  });
  useEffect(() => {
    async function getFirstIssue(firstIssueId: number) {
      setFirstIssueState({
        data: null,
        loading: loadingEnum.LOADING,
      });
      const result = await appAxios<comicVineResponse<comicVineIssueType>>({
        method: "get",
        url: `api/comics/issue/4000-${firstIssueId}`,
        params: {
          field_list: "name,image",
        },
      });

      setFirstIssueState({
        data: result.response?.data?.results,
        loading: loadingEnum.COMPLETE,
      });
    }
    async function getCharacter() {
      setCharacterState({
        data: null,
        loading: loadingEnum.LOADING,
      });
      const result = await appAxios<comicVineResponse<comicVineCharacterType>>({
        method: "get",
        url: `api/comics/character/4005-5368`,
        params: {
          field_list: "name,image,first_appeared_in_issue",
        },
      });

      setCharacterState({
        data: result.response?.data?.results,
        loading: loadingEnum.COMPLETE,
      });

      // The following line is a problem - it references stale state
      const firstIssueId = characterState.data?.first_appeared_in_issue?.id;
      if (firstIssueId) {
        getFirstIssue(firstIssueId);
      }

      // Side Note: when updating state using callback the state is not stale
      // So prev here holds an up to date state value here
      // But we don't use this approach in this scenario since we are using two separate state objects
      // setCharacterState((prev) => {
      //   console.log({ prev });
      //   return {
      //     data: result.response?.data?.results,
      //     loading: loadingEnum.COMPLETE,
      //   };
      // });
    }
    getCharacter();
  }, []);
  //   TODO: takeaway: unmount

  return (
    <ClosuresBody character={characterState} firstIssue={firstIssueState} />
  );
}

export default ClosuresBad;
