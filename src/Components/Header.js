import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

const GENRE = [
  "FICTION",
  "DRAMA",
  "HUMOR",
  "POLITICS",
  "PHILOSOPHY",
  "HISTORY",
  "ADVENTURE"
];

const Title = () => {
  return <div className="header-title">Gutenberg Project</div>;
  //return <div className="header-title">Demo</div>
};

class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <Title />
        <Grid item xs={12} md={6}>
          <List dense={true}>
            {GENRE.map((genre, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={() => this.props.onGenreClick(genre)}
                >
                  <ListItemText
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "100%",
                      background: "#ECF0F4",
                      padding: "20px",
                      fontSize: "14px",
                      borderRadius: "5px"
                    }}
                    primary={genre}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </div>
    );
  }
}

export default Header;
