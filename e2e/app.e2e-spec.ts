import { Ng4ProjectTrackingAppPage } from './app.po';

describe('ng4-project-tracking-app App', () => {
  let page: Ng4ProjectTrackingAppPage;

  beforeEach(() => {
    page = new Ng4ProjectTrackingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
