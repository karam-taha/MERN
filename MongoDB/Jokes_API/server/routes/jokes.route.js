const FakeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/Fakes/", FakeController.findAllFakes);
  app.get("/api/Fakes/:id", FakeController.findOneSingleFake);
  app.put("/api/Fakes/update/:id", FakeController.updateExistingFake);
  app.post("/api/Fakes/new", FakeController.createNewFake);
  app.delete("/api/Fakes/delete/:id", FakeController.deleteAnExistingFake);
};