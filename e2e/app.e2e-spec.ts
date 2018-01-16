import { Rt7Desk2018Page } from './app.po';

describe('rt7-desk2018 App', function() {
  let page: Rt7Desk2018Page;

  beforeEach(() => {
    page = new Rt7Desk2018Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
