import React from "react";
import { Typography, Grid } from "@material-ui/core";
import ViewableImage from "../../../components/viewable-image";
import MasonryLayout from "@components/masonry-layout";

type PanelsProps = {
  params: { category: string };
  imagePaths: string[];
};

function Panels({ params, imagePaths }: PanelsProps) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" className="capitalize">
          {params.category}
        </Typography>
      </Grid>

      {!!imagePaths?.length && (
        <MasonryLayout>
          {imagePaths.map((url: string) => (
            <ViewableImage src={url} key={url} />
          ))}
        </MasonryLayout>
      )}
    </Grid>
  );
}

export default Panels;
