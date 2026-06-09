package com.tm.nc.domain.user.model;

import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@SuperBuilder
@EqualsAndHashCode(of = "id")
public class User {
    private Long id;

    private String email;

    private String password;

    private Boolean enabled;

    private String firstName;

    private String lastName;

    private String role;

    public Boolean isEnabled() {
        return enabled;
    }
}
