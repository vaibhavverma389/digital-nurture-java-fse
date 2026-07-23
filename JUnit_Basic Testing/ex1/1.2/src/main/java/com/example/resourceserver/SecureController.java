package com.example.resourceserver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecureController {

    @GetMapping("/secure")
    public String getSecureMessage() {
        return "This is a secure endpoint";
    }
}
