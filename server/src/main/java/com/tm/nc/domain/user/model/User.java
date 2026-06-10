package com.tm.nc.domain.user.model;

import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

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

    @Builder.Default
    private boolean temporal=false;

    @Builder.Default
    private LocalDateTime expirationDate=null;

    public Boolean isEnabled() {
        return enabled;
    }

    public String getFullName() {
        return  firstName + " " + lastName;
    }

    public void activate() {
        this.temporal = false;
        this.expirationDate = null;
    }
}
