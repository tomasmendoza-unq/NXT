package com.tm.nc.domain.auth.service.impl;

import com.tm.nc.config.security.jwt.JwtService;
import com.tm.nc.domain.auth.model.AuthResult;
import com.tm.nc.domain.auth.service.AuthService;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.model.UserDetailsImpl;
import com.tm.nc.domain.user.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class AuthServiceImpl implements AuthService {


    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserService userService;

    public AuthServiceImpl(AuthenticationManager authenticationManager, JwtService jwtService, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userService = userService;
    }

    public AuthResult authUser(UsernamePasswordAuthenticationToken token) {
        String email = token.getPrincipal().toString();

        User user = userService.findUserByMail(email).orElseThrow(() -> new BadCredentialsException("email o password invalidas"));

        authenticationManager.authenticate(token);

        UserDetails userDetails = new UserDetailsImpl(user);

        String jwtToken = jwtService.generarToken(userDetails);

        return new AuthResult(jwtToken, user);
    }
}
