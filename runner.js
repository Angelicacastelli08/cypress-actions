const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImMyNGRiYmYxLWQzOTAtNGZhMC1hMGEwLTNmZTVlYzVlNDM5OS0xNjg3MTk0MTk4ODM3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMjQxN2YwMjgtN2YzMi00MWQxLTlkNTgtOGM4YTk4MmMwODRjIiwidHlwZSI6InQifQ.tZST2333HO-nlhYAWNyyTgbFlefltcc6vKRN6p8enLE '

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
