import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";
import React from "react";
import RoutePointDescriptionField from "./RoutePointDescriptionField";
import TextField from "@material-ui/core/TextField";

describe("RoutePointDescriptionField", () => {
  let shallow, changeHandler, keyPressHandler, component;

  beforeAll(() => {
    configure({ adapter: new Adapter() });
    shallow = createShallow();
  });

  beforeEach(() => {
    changeHandler = jest.fn();
    keyPressHandler = jest.fn();
    component = shallow(
      <RoutePointDescriptionField
        value="TEST STRING"
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
    );
  });

  it("Компонет создан. Им получены корректные свойства.", () => {
    expect(component).toBeTruthy();
    expect(component.props().value).toBe("TEST STRING");
    expect(component.props().onChange).toBe(changeHandler);
    expect(component.props().onKeyPress).toBe(keyPressHandler);
  });

  it("Внутри компонента существует TextField, в который проброшены корректные свойства.", () => {
    const textField = component.dive().find(TextField);
    expect(textField.props().value).toBe("TEST STRING");
    expect(textField.props().onChange).toBe(changeHandler);
    expect(textField.props().onKeyPress).toBe(keyPressHandler);
  });

  it("События вызывают корректные обработчики.", () => {
    const textField = component.dive().find(TextField);
    textField.simulate("change");
    expect(changeHandler.mock.calls.length).toBe(1);

    textField.simulate("keyPress");
    expect(keyPressHandler.mock.calls.length).toBe(1);
  });
});
