package com.tm.nc.features.cart.controller.dto.request;

import java.util.List;

public record CartPreviewRequestDTO(
        List<Long> details,
        int quantity
) {

}
