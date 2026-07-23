package com.example.employeeservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @GetMapping
    public List<Employee> getEmployees() {
        return Arrays.asList(
            new Employee(1L, "Alice Johnson", "alice@example.com"),
            new Employee(2L, "Bob Brown", "bob@example.com")
        );
    }
}
