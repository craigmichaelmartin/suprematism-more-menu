import { SuprematismMoreMenuPage } from './app.po';

const selectedItemNumber = 2;
const selectedItemText = 'Selected item was ' + selectedItemNumber;
const items = `First menu item
Second menu item which just seems to keep going and going
Third`;
const primaryNotVividAlpha = 'rgba(200,226,242,1)';
// const primaryInactive = 'rgb(200,226,242)';
// const primaryVivid = 'rgb(53,197,214)';
const primaryVividAlpha = 'rgba(53,197,214,1)';
const primaryActive = 'rgb(53,197,214)';
// const primary = 'rgb(53,197,214)';

const map: any = new Map([
  ['default', {
    'menuIconInitialBackground': primaryVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': ''
  }],
  ['right', {
    'menuIconInitialBackground': primaryVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': ''
  }],
  ['middle', {
    'menuIconInitialBackground': primaryVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': ''
  }],
  ['left', {
    'menuIconInitialBackground': primaryVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': ''
  }],
  ['vivid', {
    'menuIconInitialBackground': primaryVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': ''
  }],
  ['notVivid', {
    'menuIconInitialBackground': primaryNotVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': ''
  }],
  ['dynamicallyVivid', {
    'menuIconInitialBackground': primaryNotVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': primaryVividAlpha,
    'menuIconDynamicVisibility': ''
  }],
  ['notVisible', {
    'menuIconInitialBackground': primaryVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'hidden',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': ''
  }],
  ['visible', {
    'menuIconInitialBackground': primaryVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': ''
  }],
  ['dynamicallyVisible', {
    'menuIconInitialBackground': primaryVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'hidden',
    'menuIconDynamicBackground': '',
    'menuIconDynamicVisibility': 'visible'
  }],
  ['dynamicallyVividMiddle', {
    'menuIconInitialBackground': primaryNotVividAlpha,
    'menuActiveBorder': primaryActive,
    'menuIconInitialVisibility': 'visible',
    'menuIconDynamicBackground': primaryVividAlpha,
    'menuIconDynamicVisibility': ''
  }],
]);

const testFn = function(which) {
  let page: SuprematismMoreMenuPage;
  beforeEach(() => {
    page = new SuprematismMoreMenuPage();
    page.navigateTo('/all');
    expect(page.getParentText(which)).not.toContain(selectedItemText);
  });
  describe('before hovering', function() {
    it('menu icon should be correct vividness', () => {
      expect(page.getMenuIconStyles(which, 'background-color')).toEqual(map.get(which).menuIconInitialBackground);
    });
    it('menu icon should be correct visibility', () => {
      expect(page.getMenuIconStyles(which, 'visibility')).toEqual(map.get(which).menuIconInitialVisibility);
    });
    it('menu items should not be rendered', () => {
      expect(page.isMenuPresent(which)).toEqual(false);
    });
  });
  describe('while receiving a changed state', function() {
    beforeEach(() => {
      page.hoverParentText(which);
    });
    if (which.menuIconDynamicBackbround) {
      it('should change the menu icon to correct vividness', () => {
        expect(page.getMenuIconStyles(which, 'background-color')).toEqual(map.get(which).menuIconDynamicBackground);
      });
    }
    if (which.menuIconDynamicVisibility) {
      it('should change the menu icon to correct visibility', () => {
        expect(page.getMenuIconStyles(which, 'visibility')).toEqual(map.get(which).menuIconDynamicVisibility);
      });
    }
  });
  describe('while being hovered', function() {
    beforeEach(() => {
      page.hoverParentText(which);
      page.hoverOnMenuIcon(which);
    });
    it('should render the menu', () => {
      expect(page.isMenuPresent(which)).toEqual(true);
    });
    it('should render the menu with the correct text', () => {
      expect(page.getMenuItems(which)).toContain(items);
    });
    it('should render the menu with the correct styling', () => {
      expect(page.getMenuStyles(which, 'border-color')).toEqual(map.get(which).menuActiveBorder);
      expect(page.getMenuStyles(which, 'border-width')).toEqual('3px');
    });
    describe('and having clicking an item', function() {
      beforeEach(() => {
        page.clickMenuItem(which, selectedItemNumber);
      });
      it('should communicate that to the parent', () => {
        expect(page.getParentText(which)).toContain(selectedItemText);
      });
      it('should close the menu', () => {
        expect(page.isMenuPresent(which)).toEqual(false);
      });
      it('should return the menu icon to original vividness', () => {
        expect(page.getMenuIconStyles(which, 'background-color')).toEqual(map.get(which).menuIconInitialBackground);
      });
      it('should return the menu icon to original visibility', () => {
        expect(page.getMenuIconStyles(which, 'visibility')).toEqual(map.get(which).menuIconInitialVisibility);
      });
    });
  });
};

describe('More Menu', function() {
  describe('with no directives', function() {
    testFn('default');
  });
  describe('with solely the align directive', function() {
    describe('specifing right', function() {
      testFn('right');
    });
    describe('specifing middle', function() {
      testFn('middle');
    });
    describe('specifing left', function() {
      testFn('left');
    });
  });
  describe('with solely the vivid directive', function() {
    describe('specifing always vivid', function() {
      testFn('vivid');
    });
    describe('specifing never vivid', function() {
      testFn('notVivid');
    });
    describe('specifing dynamically vivid', function() {
      testFn('dynamicallyVivid');
    });
  });
  describe('with solely the visible directive', function() {
    describe('specifing always visible', function() {
      testFn('visible');
    });
    describe('specifing never visible', function() {
      testFn('notVisible');
    });
    describe('specifing dynamically visible', function() {
      testFn('dynamicallyVisible');
    });
  });
});
