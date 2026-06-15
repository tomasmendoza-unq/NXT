package com.tm.nc.features.system.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/system")
@Tag(name = "System", description = "Operaciones relacionadas con la gestión del sistema")
public class SystemControllerREST {

    @GetMapping("/health")
    public ResponseEntity<?> getHealth() {
        return ResponseEntity.ok().build();
    }
}
