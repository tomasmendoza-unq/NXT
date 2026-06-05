package com.tm.nc.domain.user.service.impl;

import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.persistence.UserSQLDAO;
import com.tm.nc.domain.user.service.UserService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserSQLDAO userSQLDAO;

    public UserServiceImpl(UserSQLDAO userSQLDAO) {
        this.userSQLDAO = userSQLDAO;
    }

    public User generateUser() {
        User user = new User();
        return userSQLDAO.save(user);
    }
}
