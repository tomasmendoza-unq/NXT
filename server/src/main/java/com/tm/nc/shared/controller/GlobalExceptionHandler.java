package com.tm.nc.shared.controller;

import com.tm.nc.shared.exception.BusinessException;
import com.tm.nc.shared.exception.EntityNotFoundException;
import com.tm.nc.shared.controller.dto.ErrorResponseDTO;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authorization.AuthorizationDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.AccessDeniedException;
import java.util.stream.Collectors;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler{

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponseDTO> handleEntityNotFound(
            EntityNotFoundException exception,
            HttpServletRequest request
    ) {
        log.warn("Entity not found - URI: {} | Message: {}", request.getRequestURI(), exception.getMessage());
        return ErrorResponseDTO.buildResponse(HttpStatus.NOT_FOUND, exception.getMessage(), request);
    }

    @ExceptionHandler({BusinessException.class, UnsupportedOperationException.class})
    public ResponseEntity<ErrorResponseDTO> handleBusinessException(
            BusinessException exception,
            HttpServletRequest request
    ) {
        log.warn("Business rule violation - URI: {} | Message: {}", request.getRequestURI(), exception.getMessage());
        return ErrorResponseDTO.buildResponse(HttpStatus.CONFLICT, exception.getMessage(), request);
    }

    @ExceptionHandler({AccessDeniedException.class, AuthorizationDeniedException.class })
    public ResponseEntity<ErrorResponseDTO> handleAccessDenied(
            Exception exception, HttpServletRequest request) {
        return ErrorResponseDTO.buildResponse(HttpStatus.FORBIDDEN,
                "No tiene permisos para realizar esta acción", request);
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponseDTO> handleValidationException(
            MethodArgumentNotValidException exception,
            HttpServletRequest request
    ) {
        String message = exception.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(FieldError::getDefaultMessage)
                .collect(Collectors.joining(", "));

        log.warn("Validation failed - URI: {} | Errors: {}", request.getRequestURI(), message);
        return ErrorResponseDTO.buildResponse(HttpStatus.BAD_REQUEST, message, request);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ErrorResponseDTO> handleBadCredentials(
            BadCredentialsException exception,
            HttpServletRequest request
    ) {
        return ErrorResponseDTO.buildResponse(HttpStatus.UNAUTHORIZED, "Credenciales inválidas", request);
    }

    @ExceptionHandler(ExpiredJwtException.class)
    public ResponseEntity<ErrorResponseDTO> handleExpiredJwt(
            ExpiredJwtException exception,
            HttpServletRequest request
    ) {
        return ErrorResponseDTO.buildResponse(HttpStatus.UNAUTHORIZED, "Token expirado", request);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponseDTO> handleGenericException(Exception exception,HttpServletRequest request) {

        ErrorResponseDTO error = ErrorResponseDTO.of(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Error interno del servidor",
                "Ha ocurrido un error inesperado. Por favor, contacte al administrador del sistema.",
                request.getRequestURI()
        );

        log.error(
                "Unexpected error - URI: {} | Error: {}",
                request.getRequestURI(),
                error
        );

        return ResponseEntity.status(500).body(error);
    }


}
