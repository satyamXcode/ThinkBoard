export function getAllNotes(){
     res.status(200).send("you got 20 notes");
}

export function createNote(){
   res.status(201).json({ message: "Note created successfully!"});
}

export function updateNote(){
    res.status(200).json({ message: "Note updated successfully!"});
}

export function deleteNote(){
    res.status(200).json({ message: "Note deleted successfully!"});
}
