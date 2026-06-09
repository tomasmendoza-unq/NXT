package com.tm.nc.domain.user.service.impl;

import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.persistence.UserSQLDAO;
import com.tm.nc.domain.user.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserSQLDAO userSQLDAO;

    public UserServiceImpl(UserSQLDAO userSQLDAO) {
        this.userSQLDAO = userSQLDAO;
    }

    public Client generateClient() {
        Client user = new Client();
        return userSQLDAO.save(user);
    }

    @Override
    public Optional<User> findUserByMail(String email) {
        return userSQLDAO.findByEmail(email);
    }
}
