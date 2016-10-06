import { SuprematismTooltipPage } from './app.po';

describe('suprematism-tooltip App', function() {
  let page: SuprematismTooltipPage;

  beforeEach(() => {
    page = new SuprematismTooltipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
