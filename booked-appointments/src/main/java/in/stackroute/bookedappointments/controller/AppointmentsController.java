package in.stackroute.bookedappointments.controller;

import in.stackroute.bookedappointments.dto.AppointmentsDTO;
import in.stackroute.bookedappointments.model.Appointments;
import in.stackroute.bookedappointments.service.AppointmentsService;
import in.stackroute.bookedappointments.utility.DtoEntityConverter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/appointments")
@CrossOrigin("*")
public class AppointmentsController {

    private final AppointmentsService service;
    private final DtoEntityConverter converter;

    @GetMapping
    public ResponseEntity<List<AppointmentsDTO>> showAllAppointments(){
        var appointments=service.findAll();
        var appointmentsDto=appointments.stream()
                .map(converter::toDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(appointmentsDto);
    }
    @GetMapping("/patient/{patientId}")
    public ResponseEntity<List<AppointmentsDTO>> getAppointmentsByPatientId(@PathVariable String patientId){
        var appointments=service.findByPatientId(patientId);
        var appointmentsDto=appointments.stream()
                .map(converter::toDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(appointmentsDto);
    }
    @GetMapping("/hospital/{hospitalId}")
    public ResponseEntity<List<AppointmentsDTO>> getAppointmentsByHospitalId(@PathVariable Long hospitalId){
        var appointments=service.findByHospitalId(hospitalId);
        var appointmentsDto=appointments.stream()
                .map(converter::toDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(appointmentsDto);
    }

    @PostMapping
    public ResponseEntity<AppointmentsDTO> addAppointment(@Valid @RequestBody AppointmentsDTO dto){
        var newAppointment = converter.toEntity(dto);
        var savedAppointment = service.save(newAppointment);
        var savedAppointmentDto = converter.toDto(savedAppointment);
        return ResponseEntity.status(201).body(savedAppointmentDto);
    }

    @DeleteMapping("/{appointmentId}")
    public ResponseEntity<Void> cancelAppointment(@PathVariable int appointmentId){
        boolean deleted=service.deleteAppointment(appointmentId);
        if (deleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{appointmentId}")
    public ResponseEntity<AppointmentsDTO> updateAppointment(@Valid @PathVariable int appointmentId,@RequestBody AppointmentsDTO dto){
        var appointment=converter.toEntity(dto);
        appointment.setAppointmentId(appointmentId);
        var updatedAppointment=service.updateAppointment(appointmentId,appointment);
        var updatedAppointmentDto=converter.toDto(updatedAppointment);
        return ResponseEntity.ok(updatedAppointmentDto);
    }


}
