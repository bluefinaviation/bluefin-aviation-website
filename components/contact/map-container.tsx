"use client"

import "mapbox-gl/dist/mapbox-gl.css"

import { useMemo, useState } from "react"
import { Location } from "@/types"
import { MapPinIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"
import getCenter from "geolib/es/getCenter"
import Map, { Marker, Popup } from "react-map-gl"

export const MapContainer = ({ locations }: { locations: Location[] }) => {
  const [popupInfo, setPopupInfo] = useState<Location | undefined>()

  const coordinates = locations.map((stage) => ({
    latitude: stage.coordinates.lat,
    longitude: stage.coordinates.lng,
  }))

  const center = getCenter(coordinates)

  const pins = useMemo(
    () =>
      locations.map((location) => (
        <Marker
          key={location._key}
          latitude={location.coordinates.lat}
          longitude={location.coordinates.lng}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation()
            setPopupInfo(location)
          }}
        >
          <div className="flex cursor-pointer flex-col items-center">
            <MapPinIcon className="tw-transition h-3 w-3 text-slate-100 hover:text-slate-300 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
          </div>
        </Marker>
      )),
    [locations]
  )

  return (
    <Map
      style={{ width: "100%", height: "100%" }}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        // @ts-expect-error
        latitude: center.latitude,
        // @ts-expect-error
        longitude: center.longitude,
        zoom: 1.5,
      }}
      attributionControl={false}
      //   maxZoom={15}
      //   minZoom={5}
    >
      {pins}

      {popupInfo && (
        // @ts-expect-error
        <Popup
          anchor="top"
          latitude={popupInfo?.coordinates.lat}
          longitude={popupInfo?.coordinates.lng}
          closeButton={false}
          onClose={() => setPopupInfo(null!)}
          offset={[0, 5]}
        >
          {popupInfo && (
            <div>
              <div className={clsx("text-lg font-bold text-blue-900")}>
                {popupInfo.city}
              </div>
              <div className="text-base font-medium text-slate-700">
                {popupInfo.isHq ? "Headquarters" : "Office"}
              </div>
              {popupInfo.address && (
                <p className="mt-3 border-t border-slate-900 pt-3 text-sm">
                  {popupInfo.address}
                </p>
              )}
            </div>
          )}
        </Popup>
      )}
    </Map>
  )
}
