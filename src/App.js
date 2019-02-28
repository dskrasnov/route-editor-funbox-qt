import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import RoutePointDescriptionField from "./components/RoutePointDescriptionField";
import RoutePointList from "./components/RoutePointList";
import MapArea from "./components/MapArea";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  appRoot: {
    display: "flex",
    height: "100vh"
  },
  sidebar: {
    flex: "1",
    overflowY: "auto"
  },
  mapArea: {
    flex: "3"
  }
});

class App extends Component {
  state = {
    newRoutePointDescription: "",
    mapCenter: { latitude: 55.753575, longitude: 37.62104 },
    routePointArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => ({
      id: value,
      description: `Item ${value}`,
      location: {
        latitude: value / 100 + 55.75,
        longitude: value / 100 + 37.57
      }
    }))
  };

  routePointDescriptionFieldChangeHandler = ({ target: { value } }) => {
    this.setState({
      newRoutePointDescription: value
    });
  };

  addRoutePoint = () => {
    const { newRoutePointDescription } = this.state;

    if (newRoutePointDescription.length > 0) {
      this.setState(prevState => ({
        ...prevState,
        routePointArray: [
          ...prevState.routePointArray,
          {
            id: new Date().getTime(),
            description: prevState.newRoutePointDescription,
            location: prevState.mapCenter
          }
        ],
        newRoutePointDescription: ""
      }));
    }
  };

  removeRoutePoint = id => {
    this.setState(prevState => ({
      ...prevState,
      routePointArray: [...prevState.routePointArray].filter(
        routePoint => routePoint.id !== id
      )
    }));
  };

  moveRoutePoint = (id, latitude, longitude) => {
    this.setState(prevState => ({
      ...prevState,
      routePointArray: [...prevState.routePointArray].map(routePoint =>
        routePoint.id === id
          ? {
              ...routePoint,
              location: { latitude: latitude, longitude: longitude }
            }
          : routePoint
      )
    }));
  };

  changeMapCenter = (latitude, longitude) => {
    this.setState({
      mapCenter: { latitude: latitude, longitude: longitude }
    });
  };

  render() {
    const { classes } = this.props;
    const { newRoutePointDescription, mapCenter, routePointArray } = this.state;

    return (
      <>
        <CssBaseline />
        <div className={classes.appRoot}>
          <Paper className={classes.sidebar}>
            <RoutePointDescriptionField
              value={newRoutePointDescription}
              onChange={this.routePointDescriptionFieldChangeHandler}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.addRoutePoint();
                }
              }}
            />

            <RoutePointList
              routePointArray={routePointArray}
              removeRoutePoint={this.removeRoutePoint}
            />
          </Paper>

          <MapArea
            className={classes.mapArea}
            mapCenter={mapCenter}
            routePointArray={routePointArray}
            changeMapCenter={this.changeMapCenter}
            moveRoutePoint={this.moveRoutePoint}
          />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(App);
