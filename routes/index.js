const router = require('express').Router()

// All routes 
const sliderRoutes = require('./mainSliderDataCounter');
const charity = require('./charity');
const causes = require('./causesData');
const threeBoxes = require('./threeBoxes')
const helpingOne = require('./helpingOne');
const gallery = require('./galleryData')

//Use all routers
// router.use('/api/v1/sliders', sliderRoutes);
router.use('/api/v1/slider', sliderRoutes);
router.use('/api/v1/charity', charity);
router.use('/api/v1/causes', causes);
router.use('/api/v1/boxes', threeBoxes);
router.use('/api/v1/helpingOne', helpingOne);
router.use('/api/v1/gallery', gallery);


module.exports = router