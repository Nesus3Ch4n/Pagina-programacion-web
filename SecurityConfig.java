package com;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeRequests(authz -> authz
                .requestMatchers("/", "/error", "/webjars/**").permitAll()  // Cambiado para especificar requestMatchers en lugar de antMatchers si es necesario.
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/oauth2/authorization/github")
                .defaultSuccessUrl("/user", true)
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/").permitAll()
            )
            .csrf(csrf -> csrf.disable()); // Adapta esta configuración según tus requerimientos de seguridad
        return http.build();
    }
}
