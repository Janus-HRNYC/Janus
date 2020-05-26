module.exports = {
  preset: 'jest-puppeteer',
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};
