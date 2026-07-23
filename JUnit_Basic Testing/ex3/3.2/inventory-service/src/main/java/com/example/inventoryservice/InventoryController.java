package com.example.inventoryservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    private final RestTemplate restTemplate;

    public InventoryController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/{productId}")
    public String getInventoryProductDetails(@PathVariable String productId) {
        String productDetails = restTemplate.getForObject("http://product-service/api/products/" + productId, String.class);
        return "Inventory stock level: 100 for [" + productDetails + "]";
    }
}
