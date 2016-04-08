var express = require('express');
var multer = require('multer');

var upload = multer({ dest: './temp/' });
var router = express.Router();

/*
router.all( '/*', require('../'));
router.all( '/*', require('../'));
*/
router.all( '/*', require('./controllers/mapUrlToFilePath'));

router.post( '/*', upload.single('upload'));
router.post( '/*', require('./controllers/uploadFile'));
router.post( '/*', require('./controllers/createDirectory'));
router.post( '/*', require('./controllers/showDirectory'));
router.post( '/*', require('./controllers/showFile'));

router.get( '/*', require('./controllers/showDirectory'));
router.get( '/*', require('./controllers/showFile'));

module.exports = router;
