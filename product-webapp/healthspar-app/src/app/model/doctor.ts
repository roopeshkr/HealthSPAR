import { Specialty } from "./department";

export interface Doctor {
    doctorId: number;
    doctorName: string;
    specialization: Specialty[];
    qualification: string[];
    languagesSpoken: string[];
    yearOfExperience: number;
    startTime: string;
    endTime: string;
    bio: string;
  }
