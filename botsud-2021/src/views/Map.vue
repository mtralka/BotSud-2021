<template>
  <v-container>
    <v-row class="text-center" cols="12">
      <v-col cols="12">
        <v-card tile elevation="6" loading>
          <l-map
            :zoom="zoom"
            :center="center"
            style="height: 700px; width: 100%"
          >
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-geo-json :geojson="geojsonPlants" :options="options" />
          </l-map>
        </v-card>
      </v-col>
    </v-row>
    <MapKey />
  </v-container>
</template>

<script>
import { Icon } from "leaflet";
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
import MapKey from "../components/MapKey";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    MapKey,
  },

  data: () => ({
    loading: false,
    zoom: 11,
    center: [46.51775227, 8.63129775],
    geojsonPlants: null,
    color: "#000000",
    fillColor: "#d59838",
    radius: 6,
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8,
    url:
      "https://api.mapbox.com/styles/v1/mapbox/satellite-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXRyYWxrYSIsImEiOiJja2VjNm5hdWEwNjQ4MnZ0cHlycXlndnN5In0.mfQAFUPzfGZeMht0EToJBA",
    attribution:
      '&copy; <a href="https://www.mapbox.com/">Mapbox</a> | <a href="http://osm.org/copyright">OpenStreetMap</a> contributors <br/> <strong> <a href="https:tralka.xyz">Cartography: Matthew Tralka</a></strong>',
  }),
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
        pointToLayer: this.pointToLayer,
        L_PREFER_CANVAS: true,
      };
    },
    pointToLayer() {
      return (feature, latlon) => {
        return L.circleMarker(latlon, {
          radius: this.radius,
          fillColor: this.fillColor,
          color: this.color,
          weight: this.weight,
          opacity: this.opacity,
          fillOpacity: this.fillOpacity,
        });
      };
    },
    onEachFeatureFunction() {
      return (feature, layer) => {
        layer.bindTooltip(
          `
            <div class="primary--text text-caption text-body-2" style="min-width:200px;max-width:300px;overflow:hidden;text-overflow: ellipsis;">
              <div class="text-center">
                <h3 class="text-h5 accent--text">
                  ${feature.properties.Title || "N/A"}
                </h3>
                <p class="text-subtitle-1 font-italic">
                  ${feature.properties.Longitude}, ${
            feature.properties.Latitude
          }
                </p>
              </div>
              <table class="text-left" style="table-layout: fixed; width: 100%">
                <tr>
                  <td class="font-weight-bold" >ID:</td>
                  <td>${feature.properties["Photo ID"] || "N/A"}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Taken:</td>
                  <td>${feature.properties["Date Taken"] || "N/A"}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Language:</td>
                  <td>${feature.properties.PLLanguage || "N/A"}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Species:</td>
                  <td>${feature.properties["PLPlant Sp"] || "N/A"}</td>
                </tr>
                <tr style="word-wrap:break-word;">
                  <td class="font-weight-bold">Tags:</td>
                  <td style="max-width:50px;overflow:hidden">
                    ${feature.properties["Tags"] || "N/A"}
                  </td>
                </tr>
              </table>
            </div>
          `,
          { permanent: false, sticky: true }
        );
      };
    },
  },
  async created() {
    this.loadMarkerIcons();
    this.loading = true;
    const data = require(`@/assets/mapDataPlants`);
    this.geojsonPlants = data;
    this.loading = false;
  },
  methods: {
    loadMarkerIcons: function () {
      delete Icon.Default.prototype._getIconUrl;
      Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
      });
    },
  },
};
</script>