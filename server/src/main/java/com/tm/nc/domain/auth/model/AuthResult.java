package com.tm.nc.domain.auth.model;

import com.tm.nc.domain.user.model.User;

public record AuthResult(String token, User user) {
}
