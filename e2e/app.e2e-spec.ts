import { GuidPage } from './app.po';

describe('guid App', function() {
  let page: GuidPage;

  beforeEach(() => {
    page = new GuidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
