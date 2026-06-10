package com.tm.nc.domain.user.service.impl;

import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.persistence.UserSQLDAO;
import com.tm.nc.domain.user.service.UserService;
import com.tm.nc.shared.exception.BusinessException;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserSQLDAO userSQLDAO;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserSQLDAO userSQLDAO, PasswordEncoder passwordEncoder) {
        this.userSQLDAO = userSQLDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public Client generateClient() {
        Client user = new Client();
        return userSQLDAO.save(user);
    }

    @Override
    public Optional<User> findUserByMail(String email) {
        return userSQLDAO.findByEmail(email);
    }

    @Override
    public User save(User user) {
        if(userSQLDAO.findByEmail(user.getEmail()).isPresent()) throw new BusinessException("No se pudo realizar la operación");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userSQLDAO.save(user);
    }
}
