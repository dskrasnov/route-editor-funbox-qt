import React from "react";
import { Map, Placemark, Polyline, YMaps } from "react-yandex-maps";
import PropTypes from "prop-types";

const MapArea = ({
  className,
  mapCenter,
  changeMapCenter,
  routePoints,
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
        geometry={routePoints.map(({ latitude, longitude }) => [
          latitude,
          longitude
        ])}
        options={{
          strokeColor: "#F00",
          strokeWidth: 4,
          strokeOpacity: 0.5
        }}
      />

      {routePoints.map(({ id, latitude, longitude, description }) => (
        <Placemark
          key={id}
          geometry={[latitude, longitude]}
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
  routePoints: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      description: PropTypes.string
    })
  ),
  changeMapCenter: PropTypes.func,
  moveRoutePoint: PropTypes.func
};

MapArea.defaultProps = {
  mapCenter: { latitude: 0, longitude: 0 },
  routePoints: [],
  changeMapCenter: () => {},
  moveRoutePoint: () => {}
};

export default MapArea;
