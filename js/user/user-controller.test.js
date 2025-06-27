const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('add() agrega un usuario que no estaba previamente en la lista', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@example.com");

  expect(controller.getUsers()).not.toContain(user);
  controller.add(user);
  expect(controller.getUsers()).toContain(user);
});

test('remove() no elimina nada si el usuario no está en la lista', () => {
  const controller = new UserController();
  const user1 = new User(1, "Ana", "ana@example.com");
  const user2 = new User(2, "Luis", "luis@example.com");

  controller.add(user1);
  controller.remove(user2);

  expect(controller.getUsers()).toContain(user1);
  expect(controller.getUsers()).not.toContain(user2);
});

test('findByEmail() encuentra al usuario correcto por email', () => {
  const controller = new UserController();
  const user = new User(3, "Mario", "mario@example.com");
  controller.add(user);

  const resultado = controller.findByEmail("mario@example.com");
  expect(resultado).toBe(user);
});

test('findByEmail() devuelve undefined si el email no existe', () => {
  const controller = new UserController();
  controller.add(new User(4, "Lucía", "lucia@example.com"));

  const resultado = controller.findByEmail("otro@example.com");
  expect(resultado).toBeUndefined();
});

test('findById() encuentra al usuario correcto por ID', () => {
  const controller = new UserController();
  const user = new User(10, "Carlos", "carlos@example.com");
  controller.add(user);

  const resultado = controller.findById(10);
  expect(resultado).toBe(user);
});

test('findById() devuelve undefined si el ID no existe', () => {
  const controller = new UserController();
  controller.add(new User(11, "Sofía", "sofia@example.com"));

  const resultado = controller.findById(99);
  expect(resultado).toBeUndefined();
});

let controller;

beforeEach(() => {
  controller = new UserController();
});
