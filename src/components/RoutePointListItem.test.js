import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";
import React from "react";
import RoutePointListItem from "./RoutePointListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

jest.mock("react-sortable-hoc", () => ({
  SortableElement: component => component
}));

describe("RoutePointListItem", () => {
  let shallow, removeRoutePoint, component;

  beforeAll(() => {
    configure({ adapter: new Adapter() });
    shallow = createShallow();
  });

  beforeEach(() => {
    removeRoutePoint = jest.fn();
    component = shallow(
      <RoutePointListItem
        index={9}
        id={9}
        description="TEST STRING"
        removeRoutePoint={removeRoutePoint}
      />
    );
  });

  it("Компонет создан. Им получены корректные свойства.", () => {
    expect(component).toBeTruthy();
    expect(component.props().id).toBe(9);
    expect(component.props().description).toBe("TEST STRING");
    expect(component.props().removeRoutePoint).toBe(removeRoutePoint);
  });

  it("Внутри компонента существует ListItemText, в который проброшены корректные свойства.", () => {
    const listItemText = component.dive().find(ListItemText);
    expect(listItemText.props().primary).toBe("TEST STRING");
  });

  it("События вызывают корректные обработчики.", () => {
    const iconButton = component.dive().find(IconButton);
    iconButton.simulate("click");
    expect(removeRoutePoint.mock.calls.length).toBe(1);
    expect(removeRoutePoint.mock.calls[0][0]).toBe(9);
  });
});
