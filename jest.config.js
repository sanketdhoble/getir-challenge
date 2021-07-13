module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    'tests/'
  ],
  collectCoverageFrom: [
    "src/**/*.ts"
  ]
};