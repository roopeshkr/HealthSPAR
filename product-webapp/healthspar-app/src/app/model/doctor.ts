import { Department } from "./department";

export interface Doctor {
    doctorId: number;
    doctorName: string;
    specialization: Department[];
    qualification: string[];
    languagesSpoken: string[];
    yearOfExperience: number;
    startTime: string;
    endTime: string;
    bio: string;
  }
