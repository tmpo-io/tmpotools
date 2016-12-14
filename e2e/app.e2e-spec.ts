import { TmpotoolsPage } from './app.po';

describe('tmpotools App', function() {
  let page: TmpotoolsPage;

  beforeEach(() => {
    page = new TmpotoolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
