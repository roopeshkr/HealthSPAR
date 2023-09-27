import { Specialty } from "./specialty";

export interface Doctor {
    doctorName: string;
    specialization: Specialty[];
    qualification: string[];
    languagesSpoken: string[];
    yearOfExperience: number;
    startTime: string; 
    endTime: string; 
    bio: string;
  }