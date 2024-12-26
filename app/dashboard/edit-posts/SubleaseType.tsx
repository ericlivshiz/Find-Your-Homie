export type SubleasePostType = {
    id: number;
    name?: string;
    title: string;
    address: string;
    unit: string;
    rent: number;
    move_in: string;
    move_out: string;
    location: string;
    description: string;
    contact_info: string;
    image_urls: string[];
    image_url?: string;
    type: 'Sublease';
  };