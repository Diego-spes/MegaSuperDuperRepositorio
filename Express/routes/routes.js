const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title>');
});


module.exports = router;
