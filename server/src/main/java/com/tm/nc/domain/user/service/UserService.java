package com.tm.nc.domain.user.service;

import com.tm.nc.domain.client.model.Client;
import com.tm.nc.domain.user.model.User;

import java.util.Optional;

public interface UserService {
    public Client generateClient();

    Optional<User> findUserByMail(String email);

    User save(User user);

    User update(User user);
}
