package com.tm.nc.domain.user.service.impl;

import com.tm.nc.domain.user.model.User;
import com.tm.nc.domain.user.model.UserDetailsImpl;
import com.tm.nc.domain.user.service.UserService;
import com.tm.nc.shared.exception.EntityNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserService userService;

    public UserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }


    public UserDetails loadUserByUsername(String email){

        User user = userService.findUserByMail(email).orElseThrow(() -> new EntityNotFoundException(User.class.getName(), email));

        return new UserDetailsImpl(user);
    }
}
