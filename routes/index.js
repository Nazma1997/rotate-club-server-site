const router = require('express').Router()

// All routes 
const sliderRoutes = require('./mainSliderDataCounter');
const charity = require('./charity');
const causes = require('./causesData');

//Use all routers
// router.use('/api/v1/sliders', sliderRoutes);
router.use('/api/v1/slider', sliderRoutes);
router.use('/api/v1/charity', charity);
router.use('/api/v1/causes', causes);

module.exports = router