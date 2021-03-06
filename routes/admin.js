const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../helpers/path');

router.get('/options', ((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin', 'options.html'));
}));

router.get('/', ((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin', 'main.html'));
}));

module.exports = router;