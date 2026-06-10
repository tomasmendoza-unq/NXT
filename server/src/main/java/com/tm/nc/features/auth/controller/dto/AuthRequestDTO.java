package com.tm.nc.features.auth.controller.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@Schema(description = "Body de login")
public record AuthRequestDTO(
        @Schema(example = "tm@gmail.com", description = "Email del usuario")
        @NotNull
        @NotBlank
        String email,

        @Schema(example = "123456", description = "Contraseña")
        @NotNull
        @NotBlank
        String password
){
    public UsernamePasswordAuthenticationToken toModel(){
        return new UsernamePasswordAuthenticationToken(email, password);
    }

}