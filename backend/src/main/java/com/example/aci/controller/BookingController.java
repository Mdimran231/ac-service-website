package com.example.aci.controller;

import com.example.aci.model.Booking;
import com.example.aci.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    // 1. OPEN ENDPOINT: User bina login ke booking karega
    @PostMapping("/bookings/add")
    public String addBooking(@RequestBody Booking booking) {
        bookingRepository.save(booking);
        return "Booking successful!";
    }

    // 2. SECURE ENDPOINT: Sirf Admin token ke sath dekh sakega
    @GetMapping("/admin/all-bookings")
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}