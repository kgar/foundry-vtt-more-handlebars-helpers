# Foundry VTT: More Handlebars Helpers

![GitHub issues](https://img.shields.io/github/issues/kgar/foundry-vtt-more-handlebars-helpers?style=for-the-badge)
![Latest Release Download Count](https://img.shields.io/github/downloads/kgar/foundry-vtt-more-handlebars-helpers/latest/module.zip?color=2b82fc&label=Latest+Release+Download+Count&style=for-the-badge) ![GitHub release (with filter)](https://img.shields.io/github/v/release/kgar/foundry-vtt-more-handlebars-helpers?style=for-the-badge) [![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Ffoundry-vtt-more-handlebars-helpers&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=foundry-vtt-more-handlebars-helpers) ![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkgar%2Ffoundry-vtt-more-handlebars-helpers%2Fmain%2Fmodule.json&label=Foundry%20Version&query=$.compatibility.verified&colorB=orange&style=for-the-badge) ![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fkgar%2Ffoundry-vtt-more-handlebars-helpers%2Fmaster%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge) [![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Ffoundry-vtt-more-handlebars-helpers%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/foundry-vtt-more-handlebars-helpers/) ![GitHub all releases](https://img.shields.io/github/downloads/kgar/foundry-vtt-more-handlebars-helpers/total?style=for-the-badge)

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

## `sanitize`

Strip HTML tags from a string, so that only the text is preserved.

### Params

- `htmlString` {string}: The string of HTML to sanitize.

### Example

```handlebars
<!-- value: "<span>hello</span>" -->
{{ more-handlebars-helpers-sanitize value }}
<!-- results in : "hello" -->
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

## `table`

Look up a value in a static look-up table and replace it with another value.

### Params

- `lookup` {string}: the text to use as a lookup key
- `key1` {string}: the key for `result1`; can contain a regular expression
- `result1` {string}: the value to return when `lookup` matches `key1`; can contain capturing groups (e.g. $1) to copy information from the matching regex key
- `key2`, `result2`, `key3`, `result3`, etc.

### Example

We want to look up what "blue" means, according to a static series of keys and results.

```handlebars
<!-- value: "blue" -->
{{ more-handlebars-helpers-table value "red" "angry" "blue" "sad" "yellow" "envious" "green" "happy" }}
<!-- results in: "sad" -->
```

### Example with Regex

We want to look up what "blue" means, according to a static series of keys and results. The `blue` key uses regex to capture the key, and its value references the key via `$1`.

```handlebars
<!-- value: "What does blue mean?" -->
{{ more-handlebars-helpers-table value "red" "angry" "(blue)" "$1 means sad" "yellow" "envious" "green" "happy" }}
<!-- results in: "blue means sad" -->
```

## Need More Helpers?

- Open an [issue](https://github.com/kgar/foundry-vtt-more-handlebars-helpers/issues/new).
- Optional: submit a [pull request](https://github.com/kgar/foundry-vtt-more-handlebars-helpers/compare) to resolve the issue if you know how to do it and want to contribute.

## Supporting this Module

I plan to keep building up this collection of helpers over time. If you like what I'm doing, feel free to send some support my way.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](ko-fi.com/iamkgar) [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kgar)
