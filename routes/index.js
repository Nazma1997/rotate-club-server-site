const router = require('express').Router()

// All routes 
const sliderRoutes = require('./mainSliderDataCounter');



//Use all routers
// router.use('/api/v1/sliders', sliderRoutes);
router.use('/api/v1/', sliderRoutes);


module.exports = router