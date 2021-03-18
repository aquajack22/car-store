package com.carstore.repository;
import com.carstore.model.Warehouse;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface CarStoreRepository extends MongoRepository<Warehouse,Integer>{
    
}
