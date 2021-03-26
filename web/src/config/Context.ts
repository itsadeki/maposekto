import L, { Map } from "leaflet";

class Context {
  private static instance: Context | undefined;
  public map: Map;

  private constructor() {
    this.map = L.map("app").setView([48.856, 2.351], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new Context();
    }
    return this.instance;
  }

  debug(map) {
    map.on(
      "click",
      (e: {
        latlng: {
          lat: number;
          lng: number;
        };
      }) => {
        console.log("[bounds]", map.getBounds());
        console.log("[click]", e.latlng);
      }
    );
  }
}

export default Context;
