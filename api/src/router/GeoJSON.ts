import { Router } from "express";

const GeoJSONRouter = Router();
const GeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Paris",
        popupContent: "Paris",
      },
      geometry: {
        type: "Point",
        coordinates: [2.351, 48.856],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Bercy",
        popupContent: "Bercy",
      },
      geometry: {
        type: "Point",
        coordinates: [2.38, 48.836],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Gare Monparnasse",
        popupContent: "Monparnasse (Gare)",
      },
      geometry: {
        type: "Point",
        coordinates: [2.318, 48.839],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Maison Blanche",
        popupContent: "Maison Blanche",
      },
      geometry: {
        type: "Point",
        coordinates: [2.358, 48.822],
      },
    },
    {
      type: "Feature",
      properties: { name: "Zone A" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [2.351, 48.856],
            [2.38, 48.836],
            [2.358, 48.822],
            [2.318, 48.839],
            [2.351, 48.856],
          ],
        ],
      },
    },
  ],
};

GeoJSONRouter.get("/", (req, res) => {
  res.status(200).json({ data: GeoJSON });
});

GeoJSONRouter.post("/", (req, res) => {
  GeoJSON.features.push(req.body);
  res.status(200).json({ data: GeoJSON });
});

GeoJSONRouter.put("/", (req, res) => {
  console.log(req.body);

  GeoJSON.features = GeoJSON.features.map((feat) => {
    if (feat.properties.name === req.body.properties.name) return req.body;
    else return feat;
  });
  res.status(200).json({ data: GeoJSON });
});

GeoJSONRouter.delete("/", (req, res) => {
  GeoJSON.features = GeoJSON.features.filter((feat) => {
    if (feat.properties.name !== req.body.properties.name) return feat;
  });
  res.status(200).json({ data: GeoJSON });
});

export default GeoJSONRouter;
