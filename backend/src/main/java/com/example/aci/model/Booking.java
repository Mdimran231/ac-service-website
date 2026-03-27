package com.example.aci.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "bookings")
public class Booking {
    @Id
    private String id;
    private String customerName;
    private String phone;
    private String serviceType;
    private String address;
    private String date;

    // Getters and Setters (Bahut zaroori hain)
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    // Baaki Getters/Setters...

}