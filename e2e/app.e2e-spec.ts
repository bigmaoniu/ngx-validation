import { NgxValidationPage } from './app.po';

describe('ngx-validation App', function() {
  let page: NgxValidationPage;

  beforeEach(() => {
    page = new NgxValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
