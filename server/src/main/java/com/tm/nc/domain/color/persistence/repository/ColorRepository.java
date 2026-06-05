package com.tm.nc.domain.color.persistence.repository;

import com.tm.nc.domain.color.model.Color;

import java.util.List;

public interface ColorRepository {
    public List<Color> saveAll(List<Color> colors);

    Color findById(Long idColor);
}
