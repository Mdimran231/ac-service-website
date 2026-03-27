package com.example.aci.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class SecurityConfig {

    private final JwtFilter jwtFilter;

    public SecurityConfig(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    // 1. Isse wo "Generated Security Password" wali warning hat jayegi
    @Bean
    public UserDetailsService userDetailsService() {
        return new InMemoryUserDetailsManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                // 2. CORS setting taaki React se connection mein error na aaye
                // 2. CORS setting updated to support credentials
                .cors(cors -> cors.configurationSource(request -> {
                    CorsConfiguration config = new CorsConfiguration();

                    // FIX: Replace "*" with allowedOriginPatterns or explicit URLs
                    config.setAllowedOriginPatterns(List.of("http://localhost:[*]", "https://localhost:5179"));

                    config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                    config.setAllowedHeaders(List.of("Authorization", "Content-Type", "X-Requested-With", "Accept"));
                    config.setAllowCredentials(true); // Now this will work safely

                    // Optional: If you need to read specific headers in React (like JWTs in headers)
                    config.setExposedHeaders(List.of("Authorization"));

                    return config;
                }))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/bookings/add").permitAll() // User ke liye OPEN
                        .requestMatchers("/api/auth/login").permitAll()  // Admin login ke liye OPEN
                        .requestMatchers("/api/admin/**").authenticated() // Admin dashboard LOCKED
                        .anyRequest().authenticated()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}