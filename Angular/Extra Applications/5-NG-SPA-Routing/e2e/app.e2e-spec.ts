import { NGSPAPage } from './app.po';

describe('ng-spa App', () => {
  let page: NGSPAPage;

  beforeEach(() => {
    page = new NGSPAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
