package org.example.backend.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(
        name="notes",
        indexes={
                @Index(
                        name="idx_notes_title",
                        columnList = "title"
                )
        }
)
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;



    @Column(name="title",nullable = false,length=150)
    @NotBlank(message = "Title it is required")
    @Size(max = 150, message = "Title cannot exceed 150 characters")
    private String title;


    @Column(name="description",nullable = false,columnDefinition = "TEXT")
    @NotBlank(message = "Description it is required")
    private String description;



    @CreationTimestamp
    @Column(name="create_at",updatable = false)
    private LocalDateTime createAt;


    @UpdateTimestamp
    @Column(name="updated_at")
    private LocalDateTime updatedAt;


}
