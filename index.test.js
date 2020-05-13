// FOR INITIAL TEST (think hello world)
import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  });
});
