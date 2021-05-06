var express = require('express');
var router = express.Router();
const {listar, 
    insertar,
    eliminar,
    editar, 
    editarP, 
    editarN, 
    editarContenido,
    tema,
    temaEditar,
    temaDelete,
    asignatura,
    listarAsignatura,
    editarCursos,
    examen ,
    examenDelete,

    listarTablero
} = require('../controllers/ListarController');
const {add, list} = require('../controllers/CursoController');
const Asignatura = require('../model/Asignatura');
/* GET home page. */


//Tablero
router.get('/tablero', listarTablero);

router.get('/', listar);
router.post('/add', insertar );
//editar
router.get('/edit/:id', editarCursos);
router.post('/edit/:id', editarP);
// eliminar
router.get('/delete/:id',eliminar);

// contenido
router.get('/contenido/:id',editarContenido);

//tema
router.post('/addT', tema);
router.post('/editT/:id', temaEditar);
router.get('/deleteT/:id', temaDelete);

//Asignatura
router.get('/', listarAsignatura);
router.post('/addA', asignatura);

//Crear Examen
router.post('/addE', examen);
//Borrar Examen
router.get('/deleteE/:id', examenDelete);

//Crear Actividades
//router.post('/addAct',upload.single('Ruta'), actividad);

module.exports = router;
