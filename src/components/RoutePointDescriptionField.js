import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  textFieldWrapper: {
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  }
});

const RoutePointDescriptionField = ({
  classes,
  value,
  onChange,
  onKeyPress
}) => (
  <div className={classes.textFieldWrapper}>
    <TextField
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      label="Описание"
      variant="outlined"
      fullWidth
    />
  </div>
);

RoutePointDescriptionField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};

RoutePointDescriptionField.defaultProps = {
  value: "",
  onChange: () => {},
  onKeyPress: () => {}
};

export default withStyles(styles)(RoutePointDescriptionField);
