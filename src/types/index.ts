export interface Restaurant {
    attributes: Attributes;
    id: number;
}

export interface Attributes {
    name: string;
    address: string;
    image: string;
}

export interface Ratings {
    attributes: {
        rating: string;
        description: string;
        restaurant_id: number;
        user_id: number;
    };
    id: number;
}

export interface Users {
    username: string;
    icon: string;
    id: number;
}