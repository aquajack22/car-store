package com.carstore.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehicles {
    @Id
    private long id;
    private String make;
    private String model;
    private int year_model;
    private double price;
    private boolean licensed;
    private String date_added;
}
