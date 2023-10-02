import { City } from "./city";
import { Doctor } from "./doctor";

export interface Hospital {
  hospitalId: number;
  hospitalName: string;
  hospitalWebsite: string;
  hospitalEmail: string;
  hospitalPhoneNumber: string;
  hospitalImageURL: string;
  hospitalRating: number;
  hospitalReviews: string[];
  hospitalAmenities: string;
  numberOfBeds: number;
  city: City;
  doctors: Doctor[];
}
