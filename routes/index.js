const router = require('express').Router()

// All routes 
const sliderRoutes = require('./mainSliderDataCounter');
const charity = require('./charity');
const causes = require('./causesData');
const threeBoxes = require('./threeBoxes')
const helpingOne = require('./helpingOne');
const gallery = require('./galleryData');
const testimonial = require('./testimonial');
const helpThem = require('./helpThem');
const video = require('./video');
const news = require('./newsData');
const contract = require('./contractData');
const aboutProgress = require('./aboutProgress');
const event = require('./eventPage');
const newsPage = require('./newsPage');
//Use all routers
// router.use('/api/v1/sliders', sliderRoutes);
router.use('/api/v1/slider', sliderRoutes);
router.use('/api/v1/charity', charity);
router.use('/api/v1/causes', causes);
router.use('/api/v1/boxes', threeBoxes);
router.use('/api/v1/helpingOne', helpingOne);
router.use('/api/v1/gallery', gallery);
router.use('/api/v1/testimonial', testimonial)
router.use('/api/v1/helpThem', helpThem);
router.use('/api/v1/video', video);
router.use('/api/v1/news', news);
router.use('/api/v1/contract', contract);
router.use('/api/v1/progress', aboutProgress);
router.use('/api/v1/event', event);
router.use('/api/v1/newsPage', newsPage);

module.exports = router