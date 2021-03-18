package com.carstore.model;
import java.util.List;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cars {
    private String location;
    private List<Vehicles> vehicles;
}
