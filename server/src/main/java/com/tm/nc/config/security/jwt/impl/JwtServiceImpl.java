package com.tm.nc.config.security.jwt.impl;

import com.tm.nc.config.security.jwt.JwtService;
import com.tm.nc.domain.user.model.UserDetailsImpl;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;


@Service
public class JwtServiceImpl implements JwtService {

    @Value("${jwt.secret}")
    private String secret;

    private SecretKey key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public String generarToken(UserDetails user) {
        UserDetailsImpl userDetails = (UserDetailsImpl) user;
        return Jwts.builder()
                .subject(user.getUsername())
                .expiration(new Date(System.currentTimeMillis() + 3600000))
                .claim("id", userDetails.getId())
                .claim("role", user.getAuthorities()
                        .stream()
                        .findFirst()
                        .map(GrantedAuthority::getAuthority)
                        .orElse(""))
                .issuedAt(new Date())
                .signWith(key())
                .compact();
    }

    public String extraerUsername(String token) {
        return Jwts.parser()
                .verifyWith(key())
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    public Long extractUserId(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(key())
                .build()
                .parseSignedClaims(token)
                .getPayload();
        return claims.get("id", Long.class);
    }

    public boolean tokenValido(String token, UserDetails user) {
        final String username = extraerUsername(token);
        return username.equals(user.getUsername());
    }
}