const newman = require('newman'); // require newman in your project
require('dotenv').config();

newman.run({
  collection: `https://api.postman.com/collections/33377709-65e9984c-2d71-4f11-9995-09ad15bffbf2?access_key=${process.env.ACCESS_KEY}`, 
  reporters: 'htmlextra',
  iterationCount: 1,
  reporter: {
      export: './newman/report.html',
  }
}, function (err) {
  if (err) { throw err; }
  console.log('collection run complete!');

});