package com.tm.nc.domain.brand.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Brand {

    private Long id;
    private String name;
    private String logo;
}
