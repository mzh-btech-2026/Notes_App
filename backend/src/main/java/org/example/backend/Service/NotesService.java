package org.example.backend.Service;


import org.example.backend.DTO.NotesResponse;
import org.example.backend.Entity.Notes;
import org.example.backend.Repository.NotesRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NotesService {


    private final NotesRepository notesRepository;

    public NotesService(NotesRepository notesRepository){

        this.notesRepository=notesRepository;
    }



//    -------------------- response format ---------------

    public NotesResponse maptoresponse(Notes notes){

        NotesResponse notesResponse = new NotesResponse();

        notesResponse.setTitle(notes.getTitle());
        notesResponse.setDescription(notes.getDescription());
        notesResponse.setLastModifiedAt(notes.getUpdatedAt());

        return  notesResponse;

    }


    // ---------------- create a new notes ------------

    public Notes createNote(Notes notes){

        return notesRepository.save(notes);
    }


    // -------------- get all notes ----------------
    public List<NotesResponse> getall(){

        List<Notes> note = notesRepository.findAll();

        return note.stream().map(
                this::maptoresponse).collect(Collectors.toList());

    }

    // ------------- get by id -------------------
    public NotesResponse getById(Long id){

        Notes note = notesRepository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"the data for given id is not found"));

        return maptoresponse(note);
    }

    //--------------- update a note -------------------
    public NotesResponse updateNote(Long id,Notes notes){

        Notes note = notesRepository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"the data for given id is not found"));

        note.setTitle(notes.getTitle());
        note.setDescription(notes.getDescription());
        notesRepository.save(note);

        return maptoresponse(note);

    }

    //------------------ delete a note -----------------------
    public void deleteById(Long id){

        Notes note = notesRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Note not found"
                ));

        notesRepository.delete(note);
    }

    //-----------------delete all note -------------------
    public void deleteAll(){

        notesRepository.deleteAll();
    }



}
