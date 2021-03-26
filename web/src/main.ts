import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./assets/style/style.css";
import Context from "./config/Context";

const { map, debug } = Context.getInstance();

debug(map);

fetch("/api/GeoJSON", {
  method: "GET",
})
  .then((raw) => raw.json())
  .then((res) => {
    console.log(res.data);

    handleGeoJSON(res.data);
  });

L.circle([48.87284474327185, 2.4324417114257817], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

const handleGeoJSON = (geoJson: any) => {
  L.geoJSON(geoJson, {
    pointToLayer: (_, latlng) => {
      return L.marker(latlng);
    },
    onEachFeature: (feature, layer) => {
      if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
      }
    },
  }).addTo(map);
};
