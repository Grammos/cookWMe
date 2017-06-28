import { CookWMePage } from './app.po';

describe('cook-w-me App', () => {
  let page: CookWMePage;

  beforeEach(() => {
    page = new CookWMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
