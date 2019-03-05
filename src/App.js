import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import RoutePointDescriptionField from "./components/RoutePointDescriptionField";
import RoutePointList from "./components/RoutePointList";
import MapArea from "./components/MapArea";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  addRoutePoint,
  moveRoutePoint,
  removeRoutePoint,
  reorderRoutePoints
} from "./actions/actionCreators";

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
    mapCenter: { latitude: 55.753575, longitude: 37.62104 }
  };

  routePointDescriptionFieldChangeHandler = ({ target: { value } }) => {
    this.setState({
      newRoutePointDescription: value
    });
  };

  routePointDescriptionFieldKeyPressHandler = e => {
    if (e.key === "Enter") {
      const { newRoutePointDescription, mapCenter } = this.state;
      const { addRoutePoint } = this.props;

      if (newRoutePointDescription.length > 0) {
        addRoutePoint(
          new Date().getTime(),
          mapCenter.latitude,
          mapCenter.longitude,
          newRoutePointDescription
        );
        this.setState({ newRoutePointDescription: "" });
      }
    }
  };

  changeMapCenter = (latitude, longitude) => {
    this.setState({
      mapCenter: { latitude: latitude, longitude: longitude }
    });
  };

  render() {
    const {
      classes,
      routePoints,
      removeRoutePoint,
      moveRoutePoint,
      reorderRoutePoints
    } = this.props;
    const { newRoutePointDescription, mapCenter } = this.state;

    return (
      <>
        <CssBaseline />
        <div className={classes.appRoot}>
          <Paper className={classes.sidebar}>
            <RoutePointDescriptionField
              value={newRoutePointDescription}
              onChange={this.routePointDescriptionFieldChangeHandler}
              onKeyPress={this.routePointDescriptionFieldKeyPressHandler}
            />

            <RoutePointList
              routePoints={routePoints}
              removeRoutePoint={removeRoutePoint}
              lockAxis="y"
              distance={2}
              onSortEnd={({ oldIndex, newIndex }) =>
                reorderRoutePoints(oldIndex, newIndex)
              }
            />
          </Paper>

          <MapArea
            className={classes.mapArea}
            mapCenter={mapCenter}
            changeMapCenter={this.changeMapCenter}
            routePoints={routePoints}
            moveRoutePoint={moveRoutePoint}
          />
        </div>
      </>
    );
  }
}

const AppWithStyles = withStyles(styles)(App);

const mapStateToProps = ({ routePoints }) => ({ routePoints });
const mapDispatchToProps = {
  addRoutePoint,
  removeRoutePoint,
  moveRoutePoint,
  reorderRoutePoints
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppWithStyles);
