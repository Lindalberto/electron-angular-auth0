import { browser, element, by } from 'protractor';

export class Rt7Desk2018Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
