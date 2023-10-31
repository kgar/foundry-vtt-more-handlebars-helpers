# Foundry VTT: More Handlebars Helpers

Do you need more handlebars helpers in [Foundry VTT](https://foundryvtt.com/)?

This is the Foundry Module for you!

Helpers that are included in this module:

## `replace`

Replace first instance of `searchText` with `replacementText` in `text`.

### Params

- `text` {string}
- `searchText` {string}: the text to be replaced
- `replacementText` {string}: the text to replace `searchText` once

### Example

```handlebars
<!-- value: "One and Two and Three" -->
{{ more-handlebars-helpers-replace value 'and ', '' }}
<!-- results in: "One Two and Three" -->
```

## `replaceAll`

Replace all instances of `searchText` with `replacementText` in `text`.

### Params

- `text` {string}
- `searchText` {string}: the text to be replaced
- `replacementText` {string}: the text to replace `searchText` throughout `text`

### Example

```handlebars
<!-- value: "One and Two and Three" -->
{{ more-handlebars-helpers-replaceAll value 'and ', '' }}
<!-- results in: "One Two Three" -->
```

## `split`

Split string by the given character.

### Params

- `text` {string}
- `separator` {string}: The pattern describing where each split should occur

### Example

```handlebars
<!-- value: "a,b,c" -->
<ul>{{#each (more-handlebars-helpers-split value ',')}}<li>{{this}}</li>{{/each}}</ul>
<!-- results in (newlines and indents added for documentation): 
    <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
    </ul> 
-->
```

## Need More Helpers?

- Open an [issue](https://github.com/kgar/foundry-vtt-more-handlebars-helpers/issues/new).
- Optional: submit a [pull request](https://github.com/kgar/foundry-vtt-more-handlebars-helpers/compare) to resolve the issue if you know how to do it and want to contribute.

## Supporting this Module

I plan to keep building up this collection of helpers over time. If you like what I'm doing, feel free to send some support my way.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](ko-fi.com/iamkgar) [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kgar)
