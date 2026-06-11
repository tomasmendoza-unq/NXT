package com.tm.nc.domain.auth.service.impl;

import com.tm.nc.config.security.jwt.JwtService;
import com.tm.nc.domain.auth.exception.UserExpiredException;
import com.tm.nc.domain.auth.model.AuthResult;
import com.tm.nc.domain.auth.service.AuthService;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.model.UserDetailsImpl;
import com.tm.nc.domain.user.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.Clock;
import java.time.LocalDateTime;


@Service
@Transactional
public class AuthServiceImpl implements AuthService {

    private final Clock clock;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    private final UserService userService;

    public AuthServiceImpl(@Qualifier("systemClock")Clock clock, AuthenticationManager authenticationManager, JwtService jwtService, UserService userService) {
        this.clock = clock;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userService = userService;
    }

    public AuthResult authUser(UsernamePasswordAuthenticationToken token) {
        String email = token.getPrincipal().toString();

        User user = userService.findUserByMail(email).orElseThrow(() -> new BadCredentialsException("email o password invalidas"));

        if(isExpired(user)) throw new UserExpiredException("Cuenta temporal deshabilitada, recupere contraseña para usarla");

        authenticationManager.authenticate(token);

        UserDetails userDetails = new UserDetailsImpl(user);

        String jwtToken = jwtService.generarToken(userDetails);

        user.activate();

        userService.update(user);

        return new AuthResult(jwtToken, user);
    }
    public boolean isExpired(User user) {
        LocalDateTime now = LocalDateTime.now(clock);
        LocalDateTime expiration = user.getExpirationDate();

        return user.isTemporal()
                && expiration != null
                && expiration.isBefore(now);
    }

}
