/*Convertir de una base de datos relacional a MongoDB las siguiente tablas:
CREATE TABLE usuarios (
id INT PRIMARY KEY,
nombre VARCHAR(100),
email VARCHAR(100)
);
CREATE TABLE pedidos (
id INT PRIMARY KEY,
usuario_id INT,
total DECIMAL(10,2),
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
*/

db.usuarios.insertMany([
    {_id: 1, nombre: "Lucila Anchoverri", email:"anchoverrilucila15@gmail.com"},
    {_id: 2, nombre: "Belen Antunez", email: "beluantunez19@gmail.com"},
    {_id: 3, nombre: "Morena Gutierrez", email: "morelstuff2000@gmail.com"}
    ]);
    
db.pedidos.insertMany([
    {_id: 1, usuario_id: 1, total: 250.50},
    {_id: 2, usuario_id: 2, total: 350.50},
    {_id: 3, usuario_id: 3, total: 150.50}
    ]);