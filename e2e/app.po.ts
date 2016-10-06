import { browser, element, by } from 'protractor';

const strip = str => str.replace(/['" ]+/g, '');

export class SuprematismMoreMenuPage {

  getMenu(which) {
    return this.$(`supre-more-menu.js-${which}Menu .js-moreMenuItems`);
  }
  getMenuIcon(which) {
    return this.$(`supre-more-menu.js-${which}Menu .js-moreMenuIcon`);
  }
  getParent(which) {
    return this.$(`.js-${which}`);
  }
  getBrowserMenuIcon(which) {
    return browser.findElement(by.css(`supre-more-menu.js-${which}Menu`));
  }
  getBrowserParentText(which) {
    return browser.findElement(by.css(`.js-${which}`));
  }
  getBrowserText(which) {
    return browser.findElement(by.css(`supre-more-menu.js-${which}Menu`));
  }
  getBrowserMenuItem(which, num) {
    return browser.findElement(by.css(`supre-more-menu.js-${which}Menu .js-moreMenuItems:nth-child(${num})`));
  }

  navigateTo(page = '') {
    return browser.get(`${page}`);
  }
  $(path) {
    return element(by.css(path));
  }
  isMenuPresent(which) {
    return this.getMenu(which).isPresent();
  }
  getMenuItems(which) {
    return this.getMenu(which).getText();
  }
  getParentText(which) {
    return this.getParent(which).getText();
  }
  getMenuStyles(which, property) {
    return this.getMenu(which).getCssValue(property).then(strip);
  }
  getMenuIconStyles(which, property) {
    return this.getMenuIcon(which).getCssValue(property).then(strip);
  }
  hoverOnMenuIcon(which) {
    return browser.actions().mouseMove(this.getBrowserMenuIcon(which)).perform();
  }
  hoverParentText(which) {
    return browser.actions().mouseMove(this.getBrowserParentText(which)).perform();
  }
  clickMenuItem(which, num) {
    return browser.actions().click(this.getBrowserMenuItem(which, num)).perform();
  }

}
