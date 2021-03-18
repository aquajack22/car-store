package com.carstore.controller;

import java.util.List;

import com.carstore.model.Warehouse;
import com.carstore.repository.CarStoreRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/SHC/api/v1")
@CrossOrigin
public class CarStoreController {    
    
    @Autowired
    private CarStoreRepository repository;

    @GetMapping("/warehouse/info")
    public List<Warehouse> getWarehouse(){
        return repository.findAll();
    }
}
