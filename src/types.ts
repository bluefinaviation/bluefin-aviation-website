export type Geopoint = {
  _type?: "geopoint";
  lat: number;
  lng: number;
  alt?: number;
};

export type SanityImageHotspot = {
  _type?: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type?: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type Location = {
  _key: string;
  _type?: "location";
  city: string;
  country?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  isHq: boolean;
  address?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};
