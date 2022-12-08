'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import { MapPinIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import getCenter from 'geolib/es/getCenter';
import { useMemo, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

interface ICoordinates {
  lat: number;
  lng: number;
}

interface IPopup {
  coordinates: ICoordinates;
  city: string;
  country: string;
  isHq: boolean;
  address: string;
}

export const MapContainer = ({ locations }) => {
  const [popupInfo, setPopupInfo] = useState<IPopup | undefined>();

  const coordinates = locations.map((stage) => ({
    latitude: stage.coordinates.lat,
    longitude: stage.coordinates.lng,
  }));

  const center = getCenter(coordinates);

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
          <div className="flex cursor-pointer flex-col items-center">
            <MapPinIcon className="tw-transition h-3 w-3 text-blue-300 hover:text-blue-400 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
          </div>
        </Marker>
      )),
    [locations]
  );

  return (
    <Map
      style={{ width: '100%', height: '100%' }}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      initialViewState={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        latitude: center.latitude,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
        <Popup
          anchor="top"
          latitude={popupInfo?.coordinates.lat}
          longitude={popupInfo?.coordinates.lng}
          closeButton={false}
          onClose={() => setPopupInfo(null)}
          offset={[0, 5]}
        >
          {popupInfo && (
            <div>
              <div className={clsx('text-lg font-bold text-blue-900')}>
                {popupInfo.city}
              </div>
              <div className="text-base font-medium text-gray-700">
                {popupInfo.isHq ? 'Headquarters' : 'Office'}
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
  );
};
