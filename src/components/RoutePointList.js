import React from "react";
import List from "@material-ui/core/List";
import RoutePointListItem from "./RoutePointListItem";
import PropTypes from "prop-types";

const RoutePointList = ({ routePointArray, removeRoutePoint }) => (
  <List>
    {routePointArray.map(({ id, description }) => (
      <RoutePointListItem
        key={id}
        id={id}
        description={description}
        removeRoutePoint={removeRoutePoint}
      />
    ))}
  </List>
);

RoutePointList.propTypes = {
  routePointArray: PropTypes.array,
  removeRoutePoint: PropTypes.func
};

RoutePointList.defaultProps = {
  routePointArray: [],
  removeRoutePoint: () => {}
};

export default RoutePointList;
