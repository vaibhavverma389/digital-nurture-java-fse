package com.example.orderservice.service;

import com.example.orderservice.client.UserClient;
import com.example.orderservice.dto.UserDto;
import com.example.orderservice.entity.Order;
import com.example.orderservice.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserClient userClient;

    public OrderService(OrderRepository orderRepository, UserClient userClient) {
        this.orderRepository = orderRepository;
        this.userClient = userClient;
    }

    public Order createOrder(Order order) {
        UserDto user = userClient.getUserById(order.getUserId());
        if (user == null) {
            throw new RuntimeException("Invalid user ID");
        }
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }
}
