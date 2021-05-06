const Curso = require ('./Curso');
const Tema = require ('./Tema');
const Actividad = require ('./Actividad');
const Grupo = require('./Grupo');
const Examen = require('./Examen.js');
const Asignatura = require('./Asignatura');
const Periodo = require('./Periodo');
const Parcial = require('./Parcial');



Curso.hasMany(Tema, {as: "tema", foreignKey: "CursoId"}); //un curso tiene muchos temas
Tema.belongsTo(Tema, { as: "curso", foreignKey:"CursoId"});//añade una clave de curso a tema

Tema.hasMany(Actividad, {as: "actividad", foreignKey: "TemaId"});//Un tema tiene muchas actividades
Actividad.belongsTo(Tema, { as: "tema", foreignKey: "TemaId"});//añade una clave de tema a actividad

Tema.hasOne(Examen, {as: "examen", foreignKey: "TemaId" }); //clave tema a examen
Examen.belongsTo(Tema, { as: "tema", foreignKey: "TemaId"});//un tema tiene un examen

//Periodo.hasOne(Curso, {as: "curso", foreignKey: "PeriodoId" });//un periodo tiene muchos cursos
//Curso.belongsTo(Periodo, { as: "periodo", foreignKey: "PeriodoId"});//clave periodo a curso

Parcial.hasMany(Tema, {as: "tema", foreignKey: "ParcialId"});//Un parcial tiene muchos temas
Tema.belongsTo(Parcial, { as : "parcial", foreignKey: "ParcialId"});//se añade una clave de parcial a tema