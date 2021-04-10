import React from "react";
import { Grid } from "@material-ui/core";
import SettingsMenu from "../../components/settingsMenu";
import "./layoutComponents.scss";

export const Header = ({ appTitle }) => {
  return (
    <Grid container className="header">
      <Grid item xs={12}>
        {appTitle}
      </Grid>
      <Grid item xs={12} className="alignRight">
        <SettingsMenu />
      </Grid>
    </Grid>
  );
};

export const Footer = ({ copy }) => {
  return (
    <Grid className="footer" container>
      <Grid item xs={12}>
        {copy}
      </Grid>
    </Grid>
  );
};
