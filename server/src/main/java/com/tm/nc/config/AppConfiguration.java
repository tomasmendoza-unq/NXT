package com.tm.nc.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.time.Clock;


@Configuration
public class AppConfiguration implements WebMvcConfigurer {

    @Bean("systemClock")
    @ConditionalOnMissingBean(name = "systemClock")
    public Clock clock() {
        return Clock.systemDefaultZone();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // Permite peticiones desde cualquier origen
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
                .allowedHeaders("*") // Permite todos los headers
                .allowCredentials(false); // No necesitamos credenciales para este caso
    }


}
