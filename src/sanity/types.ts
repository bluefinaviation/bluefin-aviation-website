/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type CompanyDetails = {
  _id: string;
  _type: "companyDetails";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  stats?: Array<{
    _key: string;
  } & Stat>;
  timeline?: Array<{
    _key: string;
  } & TimelineEvent>;
};

export type Policy = {
  _id: string;
  _type: "policy";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Linktree = {
  _id: string;
  _type: "linktree";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  links?: Array<{
    _key: string;
  } & LinktreeLink>;
  socials?: Array<{
    _key: string;
  } & ContactItem>;
};

export type Inquiry = {
  _id: string;
  _type: "inquiry";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  formSection?: {
    section?: Section;
  };
};

export type TripService = {
  _id: string;
  _type: "tripService";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  card?: Card;
  heroSection?: {
    section?: Section;
  };
  featuresSection?: {
    section?: Section;
    features?: Array<{
      _key: string;
    } & TripFeature>;
  };
  gallerySection?: {
    section?: Section;
    gallery?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
  };
};

export type FuelService = {
  _id: string;
  _type: "fuelService";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  card?: Card;
  heroSection?: {
    section?: Section;
  };
  featuresSection?: {
    section?: Section;
    features?: Array<{
      _key: string;
    } & FuelFeature>;
  };
  gallerySection?: {
    section?: Section;
    gallery?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
  };
};

export type Newsletter = {
  _id: string;
  _type: "newsletter";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  formSection?: {
    section?: Section;
  };
};

export type Contact = {
  _id: string;
  _type: "contact";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  contactSection?: {
    section?: Section;
    contacts?: Array<{
      _key: string;
    } & ContactItem>;
  };
  locationSection?: {
    section?: Section;
    locations?: Array<{
      _key: string;
    } & Location>;
  };
};

export type About = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  storySection?: {
    section?: Section;
    bio?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
  };
  statsSection?: {
    stats?: Array<{
      _key: string;
    } & Stat>;
  };
  teamSection?: {
    section?: Section;
  };
};

export type Home = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  heroSection?: {
    section?: Section;
    video?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
      };
      _type: "file";
    };
  };
  servicesSection?: {
    section?: Section;
  };
  brokerSection?: {
    section?: Section;
  };
  testimonialsSection?: {
    section?: Section;
    testimonials?: Array<{
      quote?: string;
      author?: {
        name?: string;
        role?: string;
        location?: string;
      };
      _type: "testimonial";
      _key: string;
    }>;
  };
  partnersSection?: {
    section?: Section;
    partners?: Array<{
      _key: string;
    } & Partner>;
  };
  contactSection?: {
    section?: Section;
  };
  newsletterSection?: {
    section?: Section;
  };
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Testimonial = {
  _id: string;
  _type: "testimonial";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  quote?: string;
  author?: {
    name?: string;
    role?: string;
    location?: string;
  };
};

export type Service = {
  _id: string;
  _type: "service";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  content?: Array<{
    _key: string;
  } & Hero | {
    _key: string;
  } & SplitImage | {
    _key: string;
  } & Features | {
    _key: string;
  } & InfoCarousel | {
    _key: string;
  } & Faqs>;
};

export type PageBuilder = Array<{
  _key: string;
} & Hero | {
  _key: string;
} & SplitImage | {
  _key: string;
} & Features | {
  _key: string;
} & InfoCarousel | {
  _key: string;
} & Faqs>;

export type Faq = {
  _id: string;
  _type: "faq";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  question?: string;
  answer?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  order?: number;
};

export type EmptyLeg = {
  _id: string;
  _type: "emptyLeg";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  origin?: Flight;
  departureTime?: string;
  destination?: Flight;
  arrivalTime?: string;
  price?: number;
  plane?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "plane";
  };
};

export type Plane = {
  _id: string;
  _type: "plane";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  model?: string;
  manufacturer?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "planeManufacturer";
  };
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "planeCategory";
  };
  code?: string;
  capacity?: number;
  speed?: number;
  range?: number;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type PlaneCategory = {
  _id: string;
  _type: "planeCategory";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  order?: number;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type PlaneManufacturer = {
  _id: string;
  _type: "planeManufacturer";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Flight = {
  _type: "flight";
  city?: string;
  countryCode?: string;
  airportCode?: string;
};

export type TimelineEvent = {
  _type: "timelineEvent";
  title?: string;
  year?: number;
  description?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type LinktreeLink = {
  _type: "linktreeLink";
  label?: string;
  description?: string;
  linkUrl?: string;
};

export type TripSubfeature = {
  _type: "tripSubfeature";
  subfeature?: string;
};

export type TripFeature = {
  _type: "tripFeature";
  feature?: string;
  subfeatures?: Array<{
    _key: string;
  } & TripSubfeature>;
};

export type FuelFeature = {
  _type: "fuelFeature";
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  continent?: string;
  airports?: number;
};

export type Card = {
  _type: "card";
  title?: string;
  tagline?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Partner = {
  _type: "partner";
  name?: string;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Location = {
  _type: "location";
  city?: string;
  country?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  isHq?: boolean;
  address?: string;
  coordinates?: Geopoint;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type ContactItem = {
  _type: "contactItem";
  url?: string;
  cta?: string;
  label?: string;
};

export type Section = {
  _type: "section";
  heading?: string;
  hasTagline?: boolean;
  tagline?: string;
  hasSummary?: boolean;
  summary?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  hasImage?: boolean;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type PortableText = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type Gallery = Array<{
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type InfoCarousel = {
  _type: "infoCarousel";
  title?: string;
  text?: BlockContent;
  items?: Array<{
    title?: string;
    text?: BlockContent;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
    _type: "item";
    _key: string;
  }>;
};

export type Faqs = {
  _type: "faqs";
  title?: string;
  faqs?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "faq";
  }>;
};

export type Stat = {
  _type: "stat";
  title?: string;
  value?: number;
  hasUnit?: boolean;
  unit?: string;
};

export type SplitImage = {
  _type: "splitImage";
  orientation?: "imageLeft" | "imageRight";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Hero = {
  _type: "hero";
  title?: string;
  text?: BlockContent;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Features = {
  _type: "features";
  title?: string;
  text?: BlockContent;
  features?: Array<{
    title?: string;
    text?: string;
    icon?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    _type: "feature";
    _key: string;
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | CompanyDetails | Policy | Linktree | Inquiry | TripService | FuelService | Newsletter | Contact | About | Home | SanityFileAsset | Testimonial | Service | PageBuilder | Faq | EmptyLeg | Plane | PlaneCategory | PlaneManufacturer | Slug | Flight | TimelineEvent | BlockContent | LinktreeLink | TripSubfeature | TripFeature | FuelFeature | Card | Partner | Location | Geopoint | ContactItem | Section | PortableText | Gallery | InfoCarousel | Faqs | Stat | SplitImage | Hero | Features | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: TESTIMONIALS_QUERY
// Query: *[_type == "testimonial"] {    ...,    "image": image.asset->url  }
export type TESTIMONIALS_QUERYResult = Array<{
  _id: string;
  _type: "testimonial";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  quote?: string;
  author?: {
    name?: string;
    role?: string;
    location?: string;
  };
  image: null;
}>;
// Variable: HOME_PAGE_QUERY
// Query: *[_type == "home"][0]{    heroSection{		section,		"video": video.asset->url	},	servicesSection{		section,		"tripService": *[_type == "tripService"][0]{			card		},		"fuelService": *[_type == "fuelService"][0]{			card		},	},	brokerSection,	testimonialsSection,	partnersSection,	contactSection,	newsletterSection,}
export type HOME_PAGE_QUERYResult = {
  heroSection: {
    section: Section | null;
    video: string | null;
  } | null;
  servicesSection: {
    section: Section | null;
    tripService: {
      card: Card | null;
    } | null;
    fuelService: {
      card: Card | null;
    } | null;
  } | null;
  brokerSection: {
    section?: Section;
  } | null;
  testimonialsSection: {
    section?: Section;
    testimonials?: Array<{
      quote?: string;
      author?: {
        name?: string;
        role?: string;
        location?: string;
      };
      _type: "testimonial";
      _key: string;
    }>;
  } | null;
  partnersSection: {
    section?: Section;
    partners?: Array<{
      _key: string;
    } & Partner>;
  } | null;
  contactSection: {
    section?: Section;
  } | null;
  newsletterSection: {
    section?: Section;
  } | null;
} | null;
// Variable: FLEET_QUERY
// Query: *[_type == "plane" && 		(($category == null) || category->slug.current == $category) &&		(($manufacturer == null) || manufacturer->slug.current == $manufacturer)	]{		_id,		_type,		_createdAt,		_updatedAt,		_rev,		model,		"manufacturer": manufacturer->{				_id,				name,				"slug": slug.current		},		category->,		code,		capacity,		speed,		range,		image	}
export type FLEET_QUERYResult = Array<{
  _id: string;
  _type: "plane";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  model: string | null;
  manufacturer: {
    _id: string;
    name: string | null;
    slug: string | null;
  } | null;
  category: {
    _id: string;
    _type: "planeCategory";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    slug?: Slug;
    order?: number;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  } | null;
  code: string | null;
  capacity: number | null;
  speed: number | null;
  range: number | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
}>;
// Variable: CONTACT_PAGE_QUERY
// Query: *[_type == "contact"][0]{		contactSection,		locationSection}
export type CONTACT_PAGE_QUERYResult = {
  contactSection: {
    section?: Section;
    contacts?: Array<{
      _key: string;
    } & ContactItem>;
  } | null;
  locationSection: {
    section?: Section;
    locations?: Array<{
      _key: string;
    } & Location>;
  } | null;
} | null;
// Variable: POLICY_BY_SLUG_QUERY
// Query: *[_type == "policy" && slug.current == $slug][0] {    "id": _id,    "updatedAt": _updatedAt,    title,    "slug": slug.current,    content,  }
export type POLICY_BY_SLUG_QUERYResult = {
  id: string;
  updatedAt: string;
  title: string | null;
  slug: string | null;
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
} | null;
// Variable: FUEL_SERVICE_PAGE_QUERY
// Query: *[_type == "fuelService"][0]{		heroSection,		featuresSection,		gallerySection,	}
export type FUEL_SERVICE_PAGE_QUERYResult = {
  heroSection: {
    section?: Section;
  } | null;
  featuresSection: {
    section?: Section;
    features?: Array<{
      _key: string;
    } & FuelFeature>;
  } | null;
  gallerySection: {
    section?: Section;
    gallery?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
  } | null;
} | null;
// Variable: LINKTREE_PAGE_QUERY
// Query: *[_type == "linktree"][0]{		heroSection,    links}
export type LINKTREE_PAGE_QUERYResult = {
  heroSection: null;
  links: Array<{
    _key: string;
  } & LinktreeLink> | null;
} | null;
// Variable: SERVICES_QUERY
// Query: *[_type == "service"]{		_id,		name,		image,		"slug": slug.current,		content,	}
export type SERVICES_QUERYResult = Array<{
  _id: string;
  name: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  slug: string | null;
  content: Array<{
    _key: string;
  } & Faqs | {
    _key: string;
  } & Features | {
    _key: string;
  } & Hero | {
    _key: string;
  } & InfoCarousel | {
    _key: string;
  } & SplitImage> | null;
}>;
// Variable: TRIP_SERVICE_PAGE_QUERY
// Query: *[_type == "tripService"][0]{		heroSection,		featuresSection,		gallerySection,	}
export type TRIP_SERVICE_PAGE_QUERYResult = {
  heroSection: {
    section?: Section;
  } | null;
  featuresSection: {
    section?: Section;
    features?: Array<{
      _key: string;
    } & TripFeature>;
  } | null;
  gallerySection: {
    section?: Section;
    gallery?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
  } | null;
} | null;
// Variable: FOOTER_QUERY
// Query: {		"policies": *[_type == "policy"]{			"id": _id, 			title,			"slug": slug.current,			content,		},		"newsletter": *[_type == "home"][0]{			"section": newsletterSection.section,		}	}
export type FOOTER_QUERYResult = {
  policies: Array<{
    id: string;
    title: string | null;
    slug: string | null;
    content: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }> | null;
  }>;
  newsletter: {
    section: Section | null;
  } | null;
};
// Variable: ALL_PLANE_FILTERS_QUERY
// Query: {  "categories": *[_type == "planeCategory"] | order(order asc) {    _id,    name,    "slug": slug.current  },  "manufacturers": *[_type == "planeManufacturer"] | order(name asc) {    _id,    name,    "slug": slug.current  }}
export type ALL_PLANE_FILTERS_QUERYResult = {
  categories: Array<{
    _id: string;
    name: string | null;
    slug: string | null;
  }>;
  manufacturers: Array<{
    _id: string;
    name: string | null;
    slug: string | null;
  }>;
};
// Variable: INQUIRY_PAGE_QUERY
// Query: *[_type == "inquiry"][0]{		heroSection,		formSection	}
export type INQUIRY_PAGE_QUERYResult = {
  heroSection: null;
  formSection: {
    section?: Section;
  } | null;
} | null;
// Variable: NEWSLETTER_PAGE_QUERY
// Query: *[_type == "newsletter"][0]{		heroSection,		formSection	}
export type NEWSLETTER_PAGE_QUERYResult = {
  heroSection: null;
  formSection: {
    section?: Section;
  } | null;
} | null;
// Variable: EMPTY_LEGS_QUERY
// Query: *[_type == "emptyLeg" && departureTime > now()] | order(departureTime asc) {		_id,		origin,		departureTime,		destination,		arrivalTime,		price,		plane->{			...,			"manufacturer": manufacturer->{				_id,				name,				"slug": slug.current			}		}	}
export type EMPTY_LEGS_QUERYResult = Array<{
  _id: string;
  origin: Flight | null;
  departureTime: string | null;
  destination: Flight | null;
  arrivalTime: string | null;
  price: number | null;
  plane: {
    _id: string;
    _type: "plane";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    model?: string;
    manufacturer: {
      _id: string;
      name: string | null;
      slug: string | null;
    } | null;
    category?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "planeCategory";
    };
    code?: string;
    capacity?: number;
    speed?: number;
    range?: number;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
  } | null;
}>;
// Variable: FAQ_QUERY
// Query: *[_type == "faq"] {		_id,		question,		answer,	}
export type FAQ_QUERYResult = Array<{
  _id: string;
  question: string | null;
  answer: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
}>;
// Variable: SERVICE_QUERY
// Query: *[_type == "service" && slug.current == $slug][0]{  ...,  "seo": {    "title": coalesce(seo.title, title, ""),    "description": coalesce(seo.description,  ""),    "image": seo.image,    "noIndex": seo.noIndex == true  },  content[]{    ...,    _type == "faqs" => {      ...,      faqs[]-> {        _id,        question,				answer,        "text": pt::text(answer)      }    }  }}
export type SERVICE_QUERYResult = {
  _id: string;
  _type: "service";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  content: Array<{
    _key: string;
    _type: "faqs";
    title?: string;
    faqs: Array<{
      _id: string;
      question: string | null;
      answer: Array<{
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      } | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }> | null;
      text: string;
    }> | null;
  } | {
    _key: string;
    _type: "features";
    title?: string;
    text?: BlockContent;
    features?: Array<{
      title?: string;
      text?: string;
      icon?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      _type: "feature";
      _key: string;
    }>;
  } | {
    _key: string;
    _type: "hero";
    title?: string;
    text?: BlockContent;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  } | {
    _key: string;
    _type: "infoCarousel";
    title?: string;
    text?: BlockContent;
    items?: Array<{
      title?: string;
      text?: BlockContent;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
      };
      _type: "item";
      _key: string;
    }>;
  } | {
    _key: string;
    _type: "splitImage";
    orientation?: "imageLeft" | "imageRight";
    title?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  }> | null;
  seo: {
    title: "";
    description: "";
    image: null;
    noIndex: false;
  };
} | null;
// Variable: ABOUT_QUERY
// Query: *[_type == "companyDetails"][0]{		name, 		stats,		timeline	}
export type ABOUT_QUERYResult = {
  name: string | null;
  stats: Array<{
    _key: string;
  } & Stat> | null;
  timeline: Array<{
    _key: string;
  } & TimelineEvent> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n  *[_type == \"testimonial\"] {\n    ...,\n    \"image\": image.asset->url\n  }\n": TESTIMONIALS_QUERYResult;
    "\n  *[_type == \"home\"][0]{\n    heroSection{\n\t\tsection,\n\t\t\"video\": video.asset->url\n\t},\n\tservicesSection{\n\t\tsection,\n\t\t\"tripService\": *[_type == \"tripService\"][0]{\n\t\t\tcard\n\t\t},\n\t\t\"fuelService\": *[_type == \"fuelService\"][0]{\n\t\t\tcard\n\t\t},\n\t},\n\tbrokerSection,\n\ttestimonialsSection,\n\tpartnersSection,\n\tcontactSection,\n\tnewsletterSection,\n}": HOME_PAGE_QUERYResult;
    "\n\t*[_type == \"plane\" && \n\t\t(($category == null) || category->slug.current == $category) &&\n\t\t(($manufacturer == null) || manufacturer->slug.current == $manufacturer)\n\t]{\n\t\t_id,\n\t\t_type,\n\t\t_createdAt,\n\t\t_updatedAt,\n\t\t_rev,\n\t\tmodel,\n\t\t\"manufacturer\": manufacturer->{\n\t\t\t\t_id,\n\t\t\t\tname,\n\t\t\t\t\"slug\": slug.current\n\t\t},\n\t\tcategory->,\n\t\tcode,\n\t\tcapacity,\n\t\tspeed,\n\t\trange,\n\t\timage\n\t}\n": FLEET_QUERYResult;
    "\n\t*[_type == \"contact\"][0]{\n\t\tcontactSection,\n\t\tlocationSection\n}": CONTACT_PAGE_QUERYResult;
    "\n  *[_type == \"policy\" && slug.current == $slug][0] {\n    \"id\": _id,\n    \"updatedAt\": _updatedAt,\n    title,\n    \"slug\": slug.current,\n    content,\n  }\n": POLICY_BY_SLUG_QUERYResult;
    "\n\t*[_type == \"fuelService\"][0]{\n\t\theroSection,\n\t\tfeaturesSection,\n\t\tgallerySection,\n\t}": FUEL_SERVICE_PAGE_QUERYResult;
    "\n\t*[_type == \"linktree\"][0]{\n\t\theroSection,\n    links\n}": LINKTREE_PAGE_QUERYResult;
    "\n\t*[_type == \"service\"]{\n\t\t_id,\n\t\tname,\n\t\timage,\n\t\t\"slug\": slug.current,\n\t\tcontent,\n\t}": SERVICES_QUERYResult;
    "\n\t*[_type == \"tripService\"][0]{\n\t\theroSection,\n\t\tfeaturesSection,\n\t\tgallerySection,\n\t}": TRIP_SERVICE_PAGE_QUERYResult;
    "\n\t{\n\t\t\"policies\": *[_type == \"policy\"]{\n\t\t\t\"id\": _id, \n\t\t\ttitle,\n\t\t\t\"slug\": slug.current,\n\t\t\tcontent,\n\t\t},\n\t\t\"newsletter\": *[_type == \"home\"][0]{\n\t\t\t\"section\": newsletterSection.section,\n\t\t}\n\t}\n\t": FOOTER_QUERYResult;
    "{\n  \"categories\": *[_type == \"planeCategory\"] | order(order asc) {\n    _id,\n    name,\n    \"slug\": slug.current\n  },\n  \"manufacturers\": *[_type == \"planeManufacturer\"] | order(name asc) {\n    _id,\n    name,\n    \"slug\": slug.current\n  }\n}": ALL_PLANE_FILTERS_QUERYResult;
    "\n\t*[_type == \"inquiry\"][0]{\n\t\theroSection,\n\t\tformSection\n\t}\n": INQUIRY_PAGE_QUERYResult;
    "\n\t*[_type == \"newsletter\"][0]{\n\t\theroSection,\n\t\tformSection\n\t}\n": NEWSLETTER_PAGE_QUERYResult;
    "\n\t*[_type == \"emptyLeg\" && departureTime > now()] | order(departureTime asc) {\n\t\t_id,\n\t\torigin,\n\t\tdepartureTime,\n\t\tdestination,\n\t\tarrivalTime,\n\t\tprice,\n\t\tplane->{\n\t\t\t...,\n\t\t\t\"manufacturer\": manufacturer->{\n\t\t\t\t_id,\n\t\t\t\tname,\n\t\t\t\t\"slug\": slug.current\n\t\t\t}\n\t\t}\n\t}\n": EMPTY_LEGS_QUERYResult;
    "\n\t*[_type == \"faq\"] {\n\t\t_id,\n\t\tquestion,\n\t\tanswer,\n\t}\n": FAQ_QUERYResult;
    "*[_type == \"service\" && slug.current == $slug][0]{\n  ...,\n  \"seo\": {\n    \"title\": coalesce(seo.title, title, \"\"),\n    \"description\": coalesce(seo.description,  \"\"),\n    \"image\": seo.image,\n    \"noIndex\": seo.noIndex == true\n  },\n  content[]{\n    ...,\n    _type == \"faqs\" => {\n      ...,\n      faqs[]-> {\n        _id,\n        question,\n\t\t\t\tanswer,\n        \"text\": pt::text(answer)\n      }\n    }\n  }\n}": SERVICE_QUERYResult;
    "\n\t*[_type == \"companyDetails\"][0]{\n\t\tname, \n\t\tstats,\n\t\ttimeline\n\t}\n": ABOUT_QUERYResult;
  }
}
