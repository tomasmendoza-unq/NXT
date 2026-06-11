package com.tm.nc.shared.annotation;

import com.tm.nc.shared.controller.dto.ErrorResponseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.security.access.prepost.PreAuthorize;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
@Operation(description = "Requiere rol ADMIN")
@ApiResponse(
        responseCode = "401",
        description = "No autenticado",
        content = @Content(
                schema = @Schema(implementation = ErrorResponseDTO.class),
                examples = @ExampleObject(value = """
                        {
                          "timestamp": "2026-03-25T14:20:00",
                          "status": 401,
                          "error": "UNAUTHORIZED",
                          "message": "Token requerido o inválido",
                          "path": "/user/true"
                        }
                        """)
        )
)
@ApiResponse(
        responseCode = "403",
        description = "No autorizado (requiere rol ADMIN)",
        content = @Content(
                schema = @Schema(implementation = ErrorResponseDTO.class),
                examples = @ExampleObject(value = """
                        {
                          "timestamp": "2026-03-25T14:20:00",
                          "status": 403,
                          "error": "FORBIDDEN",
                          "message": "No tiene permisos para realizar esta acción",
                          "path": "/user/true"
                        }
                        """)
        )
)
public @interface AdminEndpoint {
}