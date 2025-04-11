//CREACION DE LA TABLA CLIENTES
db.clientes.insertMany([
  { nombre: "Juan Pérez", email: "juanperez@mail.com", edad: 32 },
  { nombre: "María Gómez", email: "mariagomez@mail.com", edad: 28 },
  { nombre: "Pedro Ruiz", email: "pedroruiz@mail.com", edad: 45 },
  { nombre: "Ana Torres", email: "anatorres@mail.com", edad: 22 },
  { nombre: "Lucas Martínez", email: "lucasm@mail.com", edad: 37 },
  { nombre: "Sofía Herrera", email: "sofia@mail.com", edad: 26 },
  { nombre: "Diego Fernández", email: "diegof@mail.com", edad: 40 },
  { nombre: "Valentina Ríos", email: "valenrios@mail.com", edad: 30 },
  { nombre: "Martín Castro", email: "martincastro@mail.com", edad: 34 },
  { nombre: "Carla López", email: "carla.lopez@mail.com", edad: 29 }
]); 

//Obtener todos los clientes mayores de 30 años
db.clientes.find({ edad: { $gt: 30 } }); 

//Actualizar el email de un cliente con nombre = "Juan" 
db.clientes.updateOne(
  { nombre: "Juan" },
  { $set: { email: "juan.nuevo@example.com" } }
); 

//- Eliminar un cliente con email = "test@example.com" 
db.clientes.deleteOne({ email: "juanperez@mail.com" });

//insertar documentos en la tabla pedidos
db.pedidos.insertMany([
  { clienteId: 1, producto: "Teclado", precio: 12000 },
  { clienteId: 2, producto: "Mouse", precio: 8000 },
  { clienteId: 1, producto: "Monitor", precio: 20000 },
  { clienteId: 3, producto: "Auriculares", precio: 9000 }
]); 

//- Obtener todos los pedidos de un cliente_Id específico
db.pedidos.find({ clienteId: 1 }); 

// Obtener pedidos cuyo precio sea mayor a 100
db.pedidos.find({ precio: { $gt: 100 } }); 

//- Modificar múltiples documentos para agregar campo activo: true*/
db.clientes.updateMany({}, { $set: { activo: true } });

//Crear colección con validación de esquema para edad > 18 
db.createCollection("clientesValidados", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email", "edad"],
      properties: {
        nombre: { bsonType: "string" },
        email: { bsonType: "string" },
        edad: {
          bsonType: "int",
          minimum: 18,
          description: "Debe ser mayor a 18"
        }
      }
    }
  }
});


db.runCommand({
  collMod: "clientesValidados",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email", "edad"],
      properties: {
        nombre: { bsonType: "string" },
        email: { bsonType: "string" },
        edad: {
          bsonType: "int",
          minimum: 18,
          description: "Debe ser mayor a 18"
        }
      }
    }
  }
});