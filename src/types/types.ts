export interface IProduct {
    _id?: string,
    title: string,
    photo_url: string,
    description: string,
    price: number,
}

export interface ICardItem {
    _id?: string,
    title: string,
    photo_url: string,
    description?: string,
    price: number,
    quantity: number
}