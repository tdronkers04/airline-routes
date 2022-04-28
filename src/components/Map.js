import React from "react";
import { lookupLatLong } from "../helpers";

const Map = ({ currentData }) => {
  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
          {currentData.map(route => {
            const [srcData, destData] = lookupLatLong(route.src, route.dest)
            return (
              <g key={`${route.airline}-${srcData.code}>>${destData.code}`}>
                <circle className="source" cx={srcData.long} cy={srcData.lat} r="0.5">
                  <title>{srcData.name}</title>
                </circle> 
                <circle className="destination" cx={destData.long} cy={destData.lat} r="0.8">
                  <title>{destData.name}</title>
                </circle>
                <path d={`M${srcData.long} ${srcData.lat} L ${destData.long} ${destData.lat}`} />
              </g>
            )
          })}
      </g>
    </svg>
  )
}

export default Map