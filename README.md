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
- `supreVivid: boolean`: Manages vividness state ui for the menu icon
  (defaults to true).
  This directive allows the component to have a "in the background" state.
  If not provided, the default value is constantly true, so the component is
  always looking vivid and ready for use.
  Enhancement: Rather than the parent component managing this state by toggling
  this directive, have this directive accept a stream, where the component can
  be reactive to the stream.
- `supreAlign: AlignType`: Specifies how the menu popover should
  be aligned with respect to the icon (defaults to 'right')
- `supreVisible: boolean`: Specifies whether the menu icon is visible
  (defaults to true)

##### Events
 - `itemSelected: Item`: Component triggers an itemSelected event when an item
   is selected.

#### <a id="supre-more-menu-item"></a> `supre-more-menu-item`
A component to be nested in `supre-more-menu`.

##### Directives
- `supreText: string`: The text to be displayed for the menu item.


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
    supreAlign="left"
    [supreVivid]="false"
    class="js-notVividLeftMenu">
  <supre-more-menu-item supreText="First menu item"></supre-more-menu-item>
  <supre-more-menu-item supreText="Second item"></supre-more-menu-item>
  <supre-more-menu-item supreText="Third"></supre-more-menu-item>
</supre-more-menu>
```
