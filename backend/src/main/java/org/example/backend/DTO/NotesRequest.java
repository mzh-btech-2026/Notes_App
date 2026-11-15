package org.example.backend.DTO;



import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class NotesRequest {



    @NotBlank(message = "Title is required")
    private String title;


    @NotBlank(message = "Description is required")
    private String description;



}
