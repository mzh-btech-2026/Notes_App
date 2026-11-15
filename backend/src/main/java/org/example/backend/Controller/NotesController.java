package org.example.backend.Controller;


import jakarta.validation.Valid;
import org.example.backend.DTO.NotesResponse;
import org.example.backend.Entity.Notes;
import org.example.backend.Service.NotesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/notes")
@CrossOrigin("http://localhost:5432")
public class NotesController {


    private final NotesService notesService;

    public NotesController(NotesService notesService){

        this.notesService=notesService;
    }


//    ------------- create a new notes ------------------

    @PostMapping
    public ResponseEntity<Notes> creataNote(@Valid @RequestBody Notes notes){

        Notes note = notesService.createNote(notes);

        return ResponseEntity.status(HttpStatus.CREATED).body(note);

    }

    //---------- get all notes ---------------------------
    @GetMapping
    public ResponseEntity<List<NotesResponse>> getall(){

        List<NotesResponse> notes = notesService.getall();

        return ResponseEntity.status(HttpStatus.OK).body(notes);
    }

    // ------------- get by id -------------------
    @GetMapping("/{id}")
    public ResponseEntity<NotesResponse> getById(@PathVariable Long id){

        NotesResponse note = notesService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(note);

    }

    //-------------- update a note -------------------
    @PostMapping("/{id}/update")
    public ResponseEntity<NotesResponse> updateNote(
            @Valid
            @PathVariable Long id,
            @RequestBody Notes notes
    ){

        NotesResponse note = notesService.updateNote(id,notes);
        return ResponseEntity.status(HttpStatus.OK).body(note);

    }

    //----------------- delete a note ---------------------
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable Long id){

        notesService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Succesfully deleted id :"+id);
    }

    //----------------delete all notes ---------------------
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAll(){

        notesService.deleteAll();
        return ResponseEntity.status(HttpStatus.OK).body("DELETED SUCCESSFULLY ALL");
    }
}
