import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import ViewableImage from "../../../components/viewable-image";
import MasonryLayout from "@components/masonry-layout";
import AppTextField from "@components/form-inputs/app-text-field";
import useDebounce from "@lib/hooks/use-debounce";

type PanelsProps = {
  params: { category: string };
  imagePaths: string[];
  filterable: boolean;
};

function Panels({ params, imagePaths, filterable }: PanelsProps) {
  const [currentImagePaths, setCurrentImagePaths] = useState(imagePaths);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  useEffect(() => {
    setCurrentImagePaths(
      imagePaths.filter((path) => {
        const fileName = path.split("/").slice(-1)[0].split(".")[0];
        return fileName.includes(debouncedSearchTerm);
      })
    );
  }, [debouncedSearchTerm]);

  function onFilterUpdate({ target }) {
    const newFilter = target.value;
    setSearchTerm(newFilter);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" className="capitalize">
          {params.category}
        </Typography>
      </Grid>
      {filterable && (
        <Grid item xs={12}>
          <AppTextField
            label="Search"
            variant="outlined"
            onChange={onFilterUpdate}
            value={searchTerm}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        {!!currentImagePaths?.length && (
          <MasonryLayout>
            {currentImagePaths.map((url: string) => (
              <ViewableImage src={url} key={url} />
            ))}
          </MasonryLayout>
        )}{" "}
      </Grid>
    </Grid>
  );
}

export default Panels;
