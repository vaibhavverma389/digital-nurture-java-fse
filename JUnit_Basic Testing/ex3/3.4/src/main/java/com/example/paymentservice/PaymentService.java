package com.example.paymentservice;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PaymentService {

    private static final Logger logger = LoggerFactory.getLogger(PaymentService.class);
    private final RestTemplate restTemplate = new RestTemplate();

    @CircuitBreaker(name = "paymentService", fallbackMethod = "fallbackPayment")
    public String processPayment(String orderId) {
        return restTemplate.getForObject("https://thirdparty.payment.api/pay?orderId=" + orderId, String.class);
    }

    public String fallbackPayment(String orderId, Throwable throwable) {
        logger.error("Fallback triggered for order {}. Reason: {}", orderId, throwable.getMessage());
        return "Default/Fallback Payment Response for Order: " + orderId;
    }
}
