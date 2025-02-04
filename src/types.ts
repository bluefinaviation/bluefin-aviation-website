export interface Location {
  _key: string;
  city: string;
  isHq?: boolean;
  address?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface TripFeatureProps {
  feature: {
    _key: string;
    feature?: string;
    subfeatures?: Array<{
      _key: string;
      subfeature?: string;
    }>;
  };
}
