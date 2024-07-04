import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl =
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const WorldMap = () => {
  return (
    <div >
      <ComposableMap
        projection="geoMercator"
        width={600}
        height={400}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        {console.log("inside WorldMap")}

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" />
            ))
          }
        </Geographies>
        <Marker coordinates={[10.4545, 51.1657]}>
          {/* <circle r={8} fill="#F00" /> */}
        </Marker>
        <Marker coordinates={[-122.4194, 37.7749]}>
          {/* <circle r={8} fill="#0F0" /> */}
        </Marker>
        <Marker coordinates={[-74.0060, 40.7128]}>
          {/* <circle r={8} fill="#00F" /> */}
        </Marker>
      </ComposableMap>
    </div>
  );
};
export default WorldMap;