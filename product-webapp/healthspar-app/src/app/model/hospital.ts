import { City } from "./city";
import { Doctor } from "./doctor";
import { Specialty } from "./specialty";

export interface Hospital {
  hospitalId: number;
  hospitalName: string;
  hospitalWebsite: string;
  hospitalEmail: string;
  hospitalPhoneNumber: string;
  hospitalImageURL: string;
  hospitalRating: number;
  hospitalReviews: string[];
  city: City; 
  hospitalAmenities: string[];
  numberOfBeds: number;
  doctors: Doctor[];
  specialty: Specialty[]; 
}