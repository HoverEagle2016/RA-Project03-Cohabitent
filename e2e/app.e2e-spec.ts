import { RAProject03InhabitentPage } from './app.po';

describe('ra-project03-inhabitent App', function() {
  let page: RAProject03InhabitentPage;

  beforeEach(() => {
    page = new RAProject03InhabitentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('inhab works!');
  });
});
