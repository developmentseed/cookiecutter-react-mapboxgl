// MapboxGL fails outside browser (e.g. with jest)
// This mocks the mapbox-gl library
// (for more information see https://github.com/mapbox/mapbox-gl-js/issues/3436)

module.exports = {
  AttributionControl: jest.fn(),
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    addLayer: jest.fn(() => 'a layer'),
    addSource: jest.fn(() => 'a source'),
    cameraForBounds: jest.fn(() => ({
      center: [-73.5804, 45.53483],
      pitch: 60,
      bearing: -60,
      zoom: 10,
    })),
    dragRotate: { disable: jest.fn() },
    getContainer: jest.fn(() => ({
      getBoundingClientRect: jest.fn(() => ({ widht: 123 })),
    })),
    getLayer: jest.fn(() => 'layer'),
    getSource: jest.fn(),
    flyTo: jest.fn(),
    on: jest.fn(),
    remove: jest.fn(),
    removeSource: jest.fn(),
    resize: jest.fn(),
    scrollZoom: { disable: jest.fn() },
    setFeatureState: jest.fn(),
    setFilter: jest.fn(),
    setLayoutProperty: jest.fn(),
    setPaintProperty: jest.fn(),
    touchZoomRotate: { disableRotation: jest.fn() },
  })),
  NavigationControl: jest.fn(),
  addControl: jest.fn(),
}
