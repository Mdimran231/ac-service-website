package com.example.aci.repository;

import com.example.aci.model.Booking; // Booking model ko import karna zaroori hai
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    // Isme humein kuch likhne ki zaroorat nahi hai.
    // MongoRepository automatically humein save(), findAll(), findById() jaise saare functions de deta hai.
}