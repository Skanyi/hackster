import { HacksterPage } from './app.po';

describe('hackster App', function() {
  let page: HacksterPage;

  beforeEach(() => {
    page = new HacksterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
