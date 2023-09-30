export interface Appointment {
    appointmentId: number;
    patientId: string;
    hospitalId: number;
    treatmentType: string;
    localDateTime: Date;
    message: string;
    action: string;
    department: string;
    doctor: string;
    patientName: string;
    email: string;
    phoneNumber: string;
}