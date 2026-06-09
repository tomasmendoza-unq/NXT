package com.tm.nc.shared.exception;

import com.tm.nc.shared.exception.dto.ErrorResponseDTO;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler{

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponseDTO> handleEntityNotFound(
            EntityNotFoundException exception,
            HttpServletRequest request
    ) {
        return ErrorResponseDTO.buildResponse(HttpStatus.NOT_FOUND, exception.getMessage(), request);
    }

    @ExceptionHandler({BusinessException.class, UnsupportedOperationException.class})
    public ResponseEntity<ErrorResponseDTO> handleBusinessException(
            BusinessException exception,
            HttpServletRequest request
    ) {
        return ErrorResponseDTO.buildResponse(HttpStatus.CONFLICT, exception.getMessage(), request);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponseDTO> handleGenericException(Exception exception,HttpServletRequest request) {

        ErrorResponseDTO error = ErrorResponseDTO.of(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Error interno del servidor",
                "Ha ocurrido un error inesperado. Por favor, contacte al administrador del sistema.",
                request.getRequestURI()
        );

        log.error(request.getRequestURI(), error);
        log.error(String.valueOf(exception));

        return ResponseEntity.internalServerError().body(error);
    }
}
