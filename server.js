const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const app = express()
// const port = 4000
const connectDB = require('./db')
dotenv.config()
app.use(cors());
app.use(express.json())
// const Slider = require('./models/mainSliderDataCounter')
// const Charity = require('./models/charity');
// const Causes = require('./models/causesData')
  //  const ThreeBoxesData = require('./models/threeBoxes')
  // const Gallery = require('./models/galleryData')
// const TestimonialData = require('./models/testimonial');


// const newSlider = new Slider({
  
//   count: 34,
//   title: "the"
// })

// console.log(newSlider)

// const newCharity = new Charity({
//   title: "the Charity",
//   percent: 34,
//   img: "fjefk"
// })
// console.log(newCharity)

// const newCause = new Causes({
//   img: 'abcd',
//   category: '1',
//   title: 'the Cause',
//   shortDescription: "the causes are ",
//   description: "the single cause",
//   raised: '34',
//   goal: '4999'
// })
// console.log(newCause)

// const newBox = new ThreeBoxesData({
//   icon: "the Icon",
//   className: "The ClassName",
//   title: "The title",
//   description: " the Description"
// })
// console.log(newBox)


// const newGallery = new Gallery({
//   image: 'The Img',
//   title: "The title",
//   subTitle: "th sub title"
// })

// console.log(newGallery)

// const newTest = new TestimonialData({
//    description: "This is des",
//    image: "this is image",
//    name: 'This is name',
//    category: 'this is category'
// })
// console.log(newTest)






connectDB('mongodb://localhost:27017/rotate-DB')
.then(() => {
  console.log('DataBase is Connected')
  app.listen(4000, () => {
    console.log('Server is Listening on port 4000');
})
})
.catch(error => {
     console.log(error)
})
