package com.tm.nc.domain.auth.exception;

import com.tm.nc.shared.exception.BusinessException;

public class UserExpiredException extends BusinessException {
    public UserExpiredException(String message) {
        super(message);
    }
}
