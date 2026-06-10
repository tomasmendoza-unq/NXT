package com.tm.nc.config;

import lombok.Setter;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;

@TestConfiguration
public class FakeClockConfiguration {

    private Instant currentInstant = Instant.parse("2026-06-10T12:00:00Z");
    private ZoneId zoneId = ZoneId.systemDefault();

    @Bean("systemClock")
    @Primary
    public Clock fixedClock() {
        return new MutableClock();
    }

    @Bean
    @Primary
    public PasswordEncoder fixedPasswordEncoder() {
        return new PasswordEncoder() {
            @Override
            public String encode(CharSequence rawPassword) {
                return "test-password";
            }

            @Override
            public boolean matches(CharSequence rawPassword, String encodedPassword) {
                return encodedPassword.equals("test-password");
            }
        };
    }

    public class MutableClock extends Clock {

        @Override
        public ZoneId getZone() { return zoneId; }

        @Override
        public Clock withZone(ZoneId zone) {
            zoneId = zone;
            return this;
        }

        @Override
        public Instant instant() { return currentInstant; }
    }

    public void setInstant(Instant instant) { this.currentInstant = instant; }
    public void setZoneId(ZoneId zone) { this.zoneId = zone; }
    public void advanceBy(Duration duration) { currentInstant = currentInstant.plus(duration); }
}