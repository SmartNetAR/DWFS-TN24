SHOW databases;


CREATE DATABASE alumnos;

USE alumnos;

CREATE TABLE alumnos (
    -> nombre varchar(100),
    -> apellido varchar(100),
    -> edad int(5)
    -> );

SHOW tables;

DROP TABLE alumnos;

CREATE TABLE alumnos (id int auto_increment, nombre varchar(100), apellido varchar(100), edad int(5), PRIMARY KEY (id));

DESCRIBE alumnos;

ALTER TABLE alumnos DROP COLUMN edad;

ALTER TABLE alumnos ADD fecha_nacimiento DATE DEFAULT '1900/01/01' NOT NULL;

INSERT INTO alumnos ( nombre, apellido ) VALUES ( "juan", "perez"  );

INSERT INTO alumnos ( nombre, apellido, fecha_nacimiento ) VALUES ( "maría", "gonzález", "1999/05/30"  );

CREATE TABLE cursos (id int auto_increment, nombre varchar(100), PRIMARY KEY (id));

INSERT INTO cursos ( nombre ) VALUES ( "full stack"  );

ALTER TABLE alumnos.alumnos ADD id_curso INT(11) NULL;

ALTER TABLE alumnos.alumnos ADD CONSTRAINT alumnos_FK FOREIGN KEY (id_curso) REFERENCES alumnos.cursos(id);

UPDATE alumnos SET id_curso = 1 WHERE id = 2;

SELECT alumnos.*, cursos.nombre AS curso FROM alumnos INNER JOIN cursos ON alumnos.id_curso = cursos.id;

