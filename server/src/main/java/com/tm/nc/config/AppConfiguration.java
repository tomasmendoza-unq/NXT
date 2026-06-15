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




}
