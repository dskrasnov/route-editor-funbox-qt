import React from "react";
import List from "@material-ui/core/List";
import RoutePointListItem from "./RoutePointListItem";
import PropTypes from "prop-types";
import { SortableContainer } from "react-sortable-hoc";

const RoutePointList = ({ routePoints, removeRoutePoint }) => (
  <List>
    {routePoints.map(({ id, description }, index) => (
      <RoutePointListItem
        index={index}
        key={id}
        id={id}
        description={description}
        removeRoutePoint={removeRoutePoint}
      />
    ))}
  </List>
);

RoutePointList.propTypes = {
  routePoints: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string
    })
  ),
  removeRoutePoint: PropTypes.func
};

RoutePointList.defaultProps = {
  routePoints: [],
  removeRoutePoint: () => {}
};

export default SortableContainer(RoutePointList);
