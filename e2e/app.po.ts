import { browser, element, by } from 'protractor';

export class RAProject03InhabitentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('inhab-root h1')).getText();
  }
}
