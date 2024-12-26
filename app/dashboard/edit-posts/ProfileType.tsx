export type ProfilePostType = {
    id: number;
    name: string;
    title?: string;
    gender: string;
    bio: string;
    budget: string;
    sleeping_habits: string;
    smoking: boolean;
    drinking: boolean;
    pets: boolean;
    move_in: string;
    contact_info: string;
    image_url: string;
    image_urls?: string[]
    type: 'Profile';
  };