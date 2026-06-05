package com.tm.nc.domain.color.persistence.repository.impl;

import com.tm.nc.domain.color.model.Color;
import com.tm.nc.domain.color.persistence.repository.ColorRepository;
import com.tm.nc.domain.color.persistence.sql.ColorSQLDAO;
import com.tm.nc.shared.exception.EntityNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ColorRepositoryImpl implements ColorRepository {

    private final ColorSQLDAO colorSQLDAO;

    public ColorRepositoryImpl(ColorSQLDAO colorSQLDAO) {
        this.colorSQLDAO = colorSQLDAO;
    }


    @Override
    public List<Color> saveAll(List<Color> colors) {
        return colorSQLDAO.saveAll(colors);
    }

    @Override
    public Color findById(Long idColor) {
        return colorSQLDAO.findById(idColor).orElseThrow(() -> new EntityNotFoundException(Color.class.getName(), idColor));
    }
}
