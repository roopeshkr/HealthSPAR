package in.stackroute.patientservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
//@Document(collection = "address_collection")
public class Address {

        private String street;
        private String city;
        private int zip;
        private String district;
        private String state;
        private String country;

}
