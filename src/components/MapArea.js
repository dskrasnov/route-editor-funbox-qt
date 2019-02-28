import React from "react";
import { Map, Placemark, Polyline, YMaps } from "react-yandex-maps";
import PropTypes from "prop-types";

const MapArea = ({
  className,
  mapCenter,
  routePointArray,
  changeMapCenter,
  moveRoutePoint
}) => (
  <YMaps version="2.1" query={{ lang: "ru_RU", load: "package.full" }}>
    <Map
      className={className}
      defaultState={{
        center: [mapCenter.latitude, mapCenter.longitude],
        zoom: 10
      }}
      onBoundsChange={e => changeMapCenter(...e.get("newCenter"))}
    >
      <Polyline
        geometry={routePointArray.map(({ location }) => [
          location.latitude,
          location.longitude
        ])}
        options={{
          strokeColor: "#F00",
          strokeWidth: 4,
          strokeOpacity: 0.5
        }}
      />

      {routePointArray.map(({ id, location, description }) => (
        <Placemark
          key={id}
          geometry={[location.latitude, location.longitude]}
          properties={{ balloonContent: description }}
          options={{ draggable: true }}
          onDrag={e =>
            moveRoutePoint(id, ...e.get("target").geometry.getCoordinates())
          }
        />
      ))}
    </Map>
  </YMaps>
);

MapArea.propTypes = {
  mapCenter: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number
  }),
  routePointArray: PropTypes.array,
  changeMapCenter: PropTypes.func,
  moveRoutePoint: PropTypes.func
};

MapArea.defaultProps = {
  mapCenter: { latitude: 0, longitude: 0 },
  routePointArray: [],
  changeMapCenter: () => {},
  moveRoutePoint: () => {}
};

export default MapArea;
