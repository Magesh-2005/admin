package com.tnsif.adminservice.service;

import com.tnsif.adminservice.entity.Admin;
import com.tnsif.adminservice.repository.AdminRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AdminService {

    private final AdminRepository adminRepository;

    // Constructor injection (recommended)
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    /**
     * Create and save a new Admin
     */
    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    /**
     * Fetch an Admin by id. Returns null if not found.
     * (You can change to throw exceptions if you prefer)
     */
    public Admin getAdminById(Long id) {
        Optional<Admin> opt = adminRepository.findById(id);
        return opt.orElse(null);
    }

    /**
     * Fetch all Admin records
     */
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    /**
     * Update an existing Admin. Returns updated admin or null if id not found.
     */
    public Admin updateAdmin(Long id, Admin updatedAdmin) {
        Optional<Admin> opt = adminRepository.findById(id);
        if (opt.isPresent()) {
            Admin existing = opt.get();
            existing.setName(updatedAdmin.getName());
            existing.setEmail(updatedAdmin.getEmail());
            existing.setPassword(updatedAdmin.getPassword());
            existing.setPhone(updatedAdmin.getPhone());
            existing.setRole(updatedAdmin.getRole());
            existing.setStatus(updatedAdmin.getStatus());
            return adminRepository.save(existing);
        }
        return null;
    }

    /**
     * Delete admin by id. Does nothing if id not present.
     */
    public void deleteAdmin(Long id) {
        if (adminRepository.existsById(id)) {
            adminRepository.deleteById(id);
        }
    }
}
