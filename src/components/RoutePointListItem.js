import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const RoutePointListItem = ({ id, description, removeRoutePoint }) => (
  <ListItem>
    <ListItemText
      primary={description}
      primaryTypographyProps={{ noWrap: true }}
    />
    <ListItemSecondaryAction>
      <IconButton aria-label="Удалить" onClick={() => removeRoutePoint(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

RoutePointListItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  removeRoutePoint: PropTypes.func
};

RoutePointListItem.defaultProps = {
  id: 0,
  description: "",
  removeRoutePoint: () => {}
};

export default RoutePointListItem;
