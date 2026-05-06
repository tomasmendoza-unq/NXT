package com.tm.nc.config.data;

import org.springframework.boot.CommandLineRunner;

public interface DataSeeder extends CommandLineRunner {
    public void run(String... args) throws Exception;
}
