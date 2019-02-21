import React, { Component } from "react";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    height: "100vh"
  },
  textFieldContainer: {
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  sidebar: {
    flex: "1",
    overflowY: "auto"
  },
  mapArea: {
    flex: "3"
  }
});

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.sidebar}>
          <div className={classes.textFieldContainer}>
            <TextField
              id="outlined-name"
              label="Name"
              variant="outlined"
              fullWidth
            />
          </div>

          <List>
            {generate(
              <ListItem button>
                <ListItemText
                  primary="Single-line item Single-line item Single-line item Single-line item"
                  primaryTypographyProps={{ noWrap: true }}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        </Paper>

        <YMaps version="2.1" query={{ lang: "ru_RU", load: "package.full" }}>
          <Map
            className={classes.mapArea}
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          >
            <Polyline
              geometry={[
                [55.75, 37.82],
                [55.75, 37.57],
                [55.6, 37.57],
                [55.6, 37.32]
              ]}
              options={{
                strokeColor: "#000",
                strokeWidth: 4,
                strokeOpacity: 0.5
              }}
            />

            <Placemark
              geometry={[55.75, 37.82]}
              properties={{ balloonContent: "Bla-bla-bla..." }}
              options={{ draggable: true }}
            />
            <Placemark
              geometry={[55.75, 37.57]}
              properties={{ balloonContent: "Bla-bla-bla..." }}
              options={{ draggable: true }}
            />
            <Placemark
              geometry={[55.6, 37.57]}
              properties={{ balloonContent: "Bla-bla-bla..." }}
              options={{ draggable: true }}
            />
            <Placemark
              geometry={[55.6, 37.32]}
              properties={{ balloonContent: "Bla-bla-bla..." }}
              options={{ draggable: true }}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default withStyles(styles)(App);
