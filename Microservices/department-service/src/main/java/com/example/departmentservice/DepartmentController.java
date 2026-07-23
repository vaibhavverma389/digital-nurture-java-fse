package com.example.departmentservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
    @GetMapping
    public List<Department> getDepartments() {
        return Arrays.asList(
            new Department(1L, "Human Resources"),
            new Department(2L, "Information Technology")
        );
    }
}
