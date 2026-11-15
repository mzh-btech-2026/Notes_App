package org.example.backend.Repository;

import org.example.backend.Entity.Notes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Notes,Long> {


}
