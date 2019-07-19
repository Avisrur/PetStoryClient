import { PetStoryClientPage } from './app.po';

describe('pet-story-client App', function() {
  let page: PetStoryClientPage;

  beforeEach(() => {
    page = new PetStoryClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
