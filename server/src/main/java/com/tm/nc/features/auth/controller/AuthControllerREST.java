package com.tm.nc.features.auth.controller;

import com.tm.nc.domain.auth.model.AuthResult;
import com.tm.nc.domain.auth.service.AuthService;
import com.tm.nc.features.auth.controller.dto.AuthRequestDTO;
import com.tm.nc.features.auth.controller.dto.UserResponseSimpleDTO;
import com.tm.nc.shared.controller.dto.ErrorResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@Tag(name = "Autenticación", description = "Endpoints de login y seguridad")
public class AuthControllerREST {

    private final AuthService authService;


    public AuthControllerREST(AuthService authService) {
        this.authService = authService;

    }

    @PostMapping("/login")
    @Operation(summary = "Login de usuario")
    @ApiResponse(
            responseCode = "200",
            description = "Login exitoso - Token en header Authorization",
            headers = @io.swagger.v3.oas.annotations.headers.Header(
                    name = "Authorization",
                    description = "Bearer token",
                    schema = @Schema(type = "string")
            )
    )
    @ApiResponse(
            responseCode = "401",
            description = "Credenciales inválidas",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = ErrorResponseDTO.class)
            )
    )
    @SecurityRequirements()
    public ResponseEntity<UserResponseSimpleDTO> login(@RequestBody AuthRequestDTO authRequestDTO) {

        AuthResult result = authService.authUser(authRequestDTO.toModel());

        return ResponseEntity.ok()
                .header("Authorization", "Bearer " + result.token())
                .body(UserResponseSimpleDTO.fromModel(result.user()));
    }
}

