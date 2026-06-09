package com.tm.nc.domain.cart.exception;

import com.tm.nc.shared.exception.BusinessException;

public class InsufficientStockException extends BusinessException {
    public InsufficientStockException(String message) {
        super(message);
    }
}
