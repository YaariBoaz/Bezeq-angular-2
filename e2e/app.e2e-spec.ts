import { NgAdminPage } from './app.po';

describe('ng-admin App', () => {
  let page: NgAdminPage;

  beforeEach(() => {
    page = new NgAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
