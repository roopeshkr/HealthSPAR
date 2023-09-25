package com.stackroute.auth;

<<<<<<< HEAD
=======
import com.stackroute.model.Role;
>>>>>>> 3375b44602b3cb3d86353a5be02bab390baf7f76
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

    private String email;
    String password;
}
