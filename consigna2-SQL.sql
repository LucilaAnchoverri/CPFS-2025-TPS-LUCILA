CREATE TABLE empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    edad INT,
    salario DECIMAL(10, 2)
);

INSERT INTO empleados (nombre, edad, salario) VALUES
('Ana Pérez', 30, 55000),
('Luis Gómez', 45, 48000),
('Carlos Ruiz', 38, 62000),
('Andrea López', 27, 51000),
('Bruno Díaz', 50, 72000),
('Camila Torres', 33, 48000),
('Diego Fernández', 29, 60000),
('Elena Vargas', 41, 53000),
('Federico Márquez', 35, 47000),
('Gabriela Soto', 26, 52000),
('Hernán Rodríguez', 39, 75000),
('Isabel Núñez', 45, 69000),
('Javier Méndez', 31, 51000);

/*Consulta de empleados con salario mayor a 50000 */
SELECT * FROM empleados
WHERE salario > 50000;  

/*Actualizar la edad del empleado con id = 2*/
UPDATE empleados
SET edad = 46
WHERE id = 2;  

/*Eliminar el empleado con id = 3*/
DELETE FROM empleados
WHERE id = 3; 

/*Contar cuántos empleados hay*/
SELECT COUNT(*) AS total_empleados
FROM empleados;  

/*Seleccionar empleados cuyo nombre empiece con "A"*/
SELECT * FROM empleados
WHERE nombre LIKE 'A%'; 

CREATE TABLE departamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    ubicacion VARCHAR(100)
);

/* Primero, necesito agregar un campo (departamento_id) en empleados */
ALTER TABLE empleados
ADD COLUMN departamento_id INT;

/*Luego, agregas la clave foránea*/
ALTER TABLE empleados
ADD FOREIGN KEY (departamento_id) REFERENCES departamentos(id); 

/*obtener el salario promedio de los empleados*/
SELECT AVG(salario) AS salario_promedio FROM empleados;

/*Ordenar empleados por edad de mayor a menor*/
SELECT * FROM empleados
ORDER BY edad DESC; 

/* Buscar empleados con edad entre 25 y 40 años*/
SELECT * FROM empleados
WHERE edad BETWEEN 25 AND 40;

/*Obtener los 3 empleados con mejor salario*/
SELECT * FROM empleados
ORDER BY salario DESC
LIMIT 3;  