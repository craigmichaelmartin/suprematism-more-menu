# Suprematism More Menu

An Angular 2 more menu component.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-more-menu
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-more-menu/)
- Run the example locally with `npm run example`


## Components
- [`supre-more-menu`](#supre-more-menu)
- [`supre-more-menu-item`](#supre-more-menu-item)

#### <a id="supre-more-menu"></a> `supre-more-menu`
A component for a more menu.

##### Directives
- `supreState`: An object which is used to construct a state property
  in the more menu of type StateInterface to manage vivid, align, visible.
  The StateInterface expects a subject and stream for each of these.
    - `vividSubject: Subject<boolean` and `vivid$: Observable<boolean>`:
      these manage the vividness state ui for the menu icon (defaults to true).
      This allows the component to have a "in the background" state.
      If not provided, the stream starts with true.
    - `alignSubject: Subject<AlignType>` and `align$: Observable<AlignType>`:
      these specify how the menu popover should be aligned with respect
      to the icon. If not provided, the stream starts with 'right'.
    - `visibleSubject: Subject<boolean>` and `visible$: Observable<boolean>`:
      these specify whether the menu icon is visible
      If not provided, the stream starts with true.
  - The directive object is built into an object of StateInterface. To do so,
    for each option (vivid, align, visible), any of the following are suitable:
    - Nothing may be passed in for the option, which creates a subject
      and an observable stream started with the default value.
    - A value may be passed in for the option which creates a subject
      and observable stream started with the value.
    - A value and a subject may be passed in for the option which uses the
      subject and creates an observable stream started with the value.
    - A value and a subject and observable stream may be passed in for the
      option, which uses the subject and observable stream started
      with the value.
    - A subject and observable stream may be passed in for the option,
      which uses the subject and observable stream.

##### Events
 - `itemSelected: Item`: Component triggers an itemSelected event when an item
   is selected.

#### <a id="supre-more-menu-item"></a> `supre-more-menu-item`
A component to be nested in `supre-more-menu`.

##### Directives
- `supreItem: Item`: The item object corresponding to the transcluded
  ng-content text to be displayed for the menu item.


## States
- The more menu component has four states:
  - not visible
  - visible
  - not vivid
  - inactive
  - vivid
  - active


## Example
```html
<supre-more-menu
    [supreState]="{align: 'middle', vivid: 'false'}"
    class="js-notVividMiddleMenu">
  <supre-more-menu-item [supreItem]="{id: 1}">First menu item</supre-more-menu-item>
  <supre-more-menu-item [supreItem]="{id: 2}">Second item</supre-more-menu-item>
  <supre-more-menu-item [supreItem]="{id: 3}">Third</supre-more-menu-item>
</supre-more-menu>
```
