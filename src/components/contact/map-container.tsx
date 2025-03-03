"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import { useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl/mapbox";
import { MapPin } from "@phosphor-icons/react";
import getCenter from "geolib/es/getCenter";

import { cn } from "@/lib/utils";

import { Location } from "@/types";

export const MapContainer = ({ locations }: { locations: Location[] }) => {
  const [popupInfo, setPopupInfo] = useState<Location | undefined>();

  const coordinates = locations.map((location) => ({
    latitude: location.coordinates.lat,
    longitude: location.coordinates.lng,
  }));

  const center = getCenter(coordinates) || { latitude: 0, longitude: 0 };

  const pins = useMemo(
    () =>
      locations.map((location) => (
        <Marker
          key={location._key}
          latitude={location.coordinates.lat}
          longitude={location.coordinates.lng}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(location);
          }}
        >
          <MapPin
            size={32}
            weight="fill"
            className={cn("text-primary", location.isHq && "text-secondary")}
          />
        </Marker>
      )),
    [locations]
  );

  return (
    <div className="h-[500px] w-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          latitude: center.latitude,
          longitude: center.longitude,
          zoom: 3,
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      >
        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            latitude={popupInfo.coordinates.lat}
            longitude={popupInfo.coordinates.lng}
            closeButton={false}
            onClose={() => setPopupInfo(undefined)}
            offset={[0, 5]}
            className="z-10"
          >
            <div className="flex flex-col gap-1 p-2">
              <h3 className="text-lg font-semibold">{popupInfo.city}</h3>
              {popupInfo.isHq && popupInfo.address && (
                <p className="text-sm text-muted-foreground">
                  {popupInfo.address}
                </p>
              )}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};
