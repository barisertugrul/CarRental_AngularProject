import { CarImage } from "./carImage";

export interface CarDto{
    carId:number;
    carName:string;
    brandName:string;
    colorName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    images: CarImage[];
}