package com.tm.nc.domain.auth.service;

import com.tm.nc.domain.auth.model.AuthResult;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public interface AuthService {
    AuthResult authUser(UsernamePasswordAuthenticationToken model);
}
