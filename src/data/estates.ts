export interface Estate {
  id: string;
  title: string;
  location: string;
  squareFeet: string;
  acreage: string;
  architecture: string;
  completionYear: number;
  image: string;
  awards: string[];
  features: string[];
  description: string;
}

export const ESTATES_DATA: Estate[] = [
  {
    id: 'keowee-sanctuary',
    title: 'The Keowee Waterfront Sanctuary',
    location: 'Lake Keowee, South Carolina',
    squareFeet: '9,450 sq ft',
    acreage: '3.4 Private Shoreline Acres',
    architecture: 'Timber Frame & Hand-Hewn Fieldstone',
    completionYear: 2023,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    awards: ['NAHB Custom Home of the Year', 'Pinnacle Award of Excellence'],
    features: ['Private Deepwater Covered Dock', 'Soaring Cathedral Timber Trusses', 'Custom 1,200-Bottle Wine Vault'],
    description: 'Monumental waterfront estate built into natural granite shoreline. Handcrafted Douglas fir timbers, dry-stacked stone fireplaces, and disappearing pocket glass walls.'
  },
  {
    id: 'mountain-park-lodge',
    title: 'The Ridge at Mountain Park',
    location: 'The Cliffs at Mountain Park, SC',
    squareFeet: '8,200 sq ft',
    acreage: '5.1 Mountain Crest Acres',
    architecture: 'Modern Organic Mountain Craft',
    completionYear: 2024,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    awards: ['Best in American Living Platinum', 'Bridge Award Winner'],
    features: ['Cantilevered Heated Infinity Pool', 'Dual Primary Wing Suites', 'Radiant Heated Blue Stone Patios'],
    description: 'Engineered onto a 2,400-foot ridge commanding unobstructed 50-mile vistas across the Blue Ridge escarpment. Features custom steel-and-timber joinery.'
  },
  {
    id: 'champagne-residence',
    title: 'The Champagne Country Residence',
    location: 'Travelers Rest, South Carolina',
    squareFeet: '7,850 sq ft',
    acreage: '8.2 Pastoral Acres',
    architecture: 'European Provincial & Slate',
    completionYear: 2022,
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
    awards: ['National Custom Builder Showcase', 'Master Craftsman Gold'],
    features: ['Reclaimed French Oak Parquet', 'Natural Vermont Slate Roof', 'Hand-Forged Architectural Ironwork'],
    description: 'Generational estate combining old-world masonry with discreet modern geothermal systems and precision acoustic insulation.'
  },
  {
    id: 'glass-pavilion-glassy',
    title: 'The Glass Pavilion on the Escarpment',
    location: 'The Cliffs at Glassy, Landrum SC',
    squareFeet: '6,600 sq ft',
    acreage: '2.8 High-Altitude Acres',
    architecture: 'Structural Glass & Black Granite',
    completionYear: 2023,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    awards: ['Architectural Digest Feature', 'State Design Merit'],
    features: ['Motorized 12-Foot Minimal Glazing', 'Suspended Fire Hearth', 'Observation Sun Terrace'],
    description: 'Perched 3,000 feet above the valley floor. Designed to frame panoramic cloud layers and sunrise light through engineered triple-pane architectural glass.'
  },
  {
    id: 'walnut-cove-manor',
    title: 'Walnut Cove Cotswold Manor',
    location: 'The Cliffs at Walnut Cove, Arden NC',
    squareFeet: '8,900 sq ft',
    acreage: '2.2 Forest Acres',
    architecture: 'Hand-Cut Limestone & English Timber',
    completionYear: 2021,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    awards: ['Pinnacle Master Artisan Trophy', 'LEED Silver Certified'],
    features: ['Private Central Courtyard', 'In-House Custom Walnut Cabinetry', 'Bespoke Scullery & Tasting Room'],
    description: 'Built with Gabriel Builders in-house custom cabinetry millwork, artisan stonemasons, and dedicated architectural site management.'
  },
  {
    id: 'lake-toxaway-estate',
    title: 'Toxaway Private Point Estate',
    location: 'Lake Toxaway, North Carolina',
    squareFeet: '10,100 sq ft',
    acreage: '4.8 Peninsula Acres',
    architecture: 'Appalachian Heavy Timber & Cedar',
    completionYear: 2023,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85',
    awards: ['National Custom Home of the Year Finalist'],
    features: ['Two-Story Timber Boathouse', 'Four Outdoor Masonry Fireplaces', 'Screened Heated Veranda'],
    description: 'Peninsula sanctuary boasting 800 feet of shoreline frontage on North Carolina largest private lake. Full in-house interior design and landscape integration.'
  }
];
