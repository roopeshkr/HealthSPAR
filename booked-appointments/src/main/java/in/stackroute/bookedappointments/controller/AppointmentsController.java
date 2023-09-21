package in.stackroute.bookedappointments.controller;

import in.stackroute.bookedappointments.dto.AppointmentsDTO;
import in.stackroute.bookedappointments.model.Appointments;
import in.stackroute.bookedappointments.service.AppointmentsService;
import in.stackroute.bookedappointments.utility.DtoEntityConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/healthspar_appointments")
public class AppointmentsController {

    private final AppointmentsService service;
    private final DtoEntityConverter converter;
    @GetMapping
    public ResponseEntity<List<Appointments>> showAllAppointments(){
        var list = service.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping
    public ResponseEntity<AppointmentsDTO> addAppointment(@RequestBody AppointmentsDTO dto){
        var newAppointment = converter.toEntity(dto);
        var savedAppointment = service.save(newAppointment);
        var savedAppointmentDto = converter.toDto(savedAppointment);
        return ResponseEntity.status(201).body(savedAppointmentDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancelAppointment(@PathVariable int id){
        service.deleteById(id);
        return ResponseEntity.noContent().build();

    }

}
