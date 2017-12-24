# node-tests
---

## Section 6
---

## Mocha and Basic testing
mocha: http://mochajs.org/
npm install = npm i
npm i mocha@version > npm i mocha@3.0.0
npm i mocha --save
  --save      is for save into node_modules
  --save-dev  is for save into node_modules for development puposes only

we need tell mocha which files to test

## Watch and auto restart Tests
we can type in terminal
  > npm run {{scriptName}}
  > npm run 'npm test-watch'

  for 
  > npm start
  > npm test

  there is no need to type 'run' command

  > nodemon --exec 'npm test'
  --excecute {{command}}

## Using an Asseriton Library
expect: https://github.com/mjackson/expect

expect().toBe       for num, str
expect().toEqual    for obj

might set 'done' parameter for asyc functions


supertest: https://github.com/visionmedia/supertest
npm i supertest@2.0.0 --save-dev


## Testing Express Applications: Part 1&2

## Organizing Test With describe()
it's a function from mocha, it allows you to group tests together

## Test Spies
rewire: npm i rewire@2.5.2 --save-dev
  > let app = rewire('./app.js');
  what 'rewire' does is to 'require' our file and adds to functions
  app.__set__
  app.__get__