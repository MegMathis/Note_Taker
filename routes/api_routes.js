const router = require("express").Router();
const store = require("../db/store");

// GET "/api/notes" get all notes from the data base
router.get("/notes", (client_request, server_response) => {
  store
    .getNotes()
    .then((notes) => {
      return server_response.json(notes);
    })
    .catch((err) => server_response.status(500).json(err));
});

router.post("/notes", (client_request, server_response) => {
  store
    .addNote(client_request.body)
    .then((note) => server_response.json(note))
    .catch((err) => server_response.status(500).json(err));
});

// Delete notes
router.delete("/notes/:id", (client_request, server_response) => {
  store
    .removeNote(client_request.params.id)
    .then(() => server_response.json({ ok: true }))
    .catch((err) => server_response.status(500).json(err));
});

module.exports = router;
