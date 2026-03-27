package com.example.aci.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.ArrayList;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // 1. Request header se "Authorization" nikaalna
        String authHeader = request.getHeader("Authorization");
        String token = null;
        String username = null;

        // 2. Check karna ki token "Bearer " se shuru ho raha hai ya nahi
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7); // "Bearer " ke baad wala hissa (Token)
            try {
                username = jwtUtils.getUsernameFromToken(token);
            } catch (Exception e) {
                System.out.println("Token parsing error");
            }
        }

        // 3. Agar username mil gaya aur user login nahi hai, toh verify karein
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            if (jwtUtils.validateToken(token)) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        username, null, new ArrayList<>());

                // Spring Security ko batana ki ye user valid hai
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }

        // 4. Request ko agle step par bhej do
        filterChain.doFilter(request, response);
    }
}