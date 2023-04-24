export interface Restaurant {
    attributes: Attributes;
    id: number;
}

export interface Attributes {
    name: string;
    address: string;
    image: string;
}