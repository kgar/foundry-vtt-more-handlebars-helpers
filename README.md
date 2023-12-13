# Foundry VTT: More Handlebars Helpers

![GitHub issues](https://img.shields.io/github/issues/kgar/foundry-vtt-more-handlebars-helpers?style=for-the-badge)
![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fgithub.com%2Fkgar%2Ffoundry-vtt-more-handlebars-helpers%2Freleases%2Flatest%2Fdownload%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge) ![Latest Release Download Count](https://img.shields.io/github/downloads/kgar/foundry-vtt-more-handlebars-helpers/latest/module.zip?color=2b82fc&label=Latest+Release+Download+Count&style=for-the-badge) [![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Ffoundry-vtt-more-handlebars-helpers&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=foundry-vtt-more-handlebars-helpers) ![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fgithub.com%2Fkgar%2Ffoundry-vtt-more-handlebars-helpers%2Freleases%2Flatest%2Fdownload%2Fmodule.json&label=Foundry%20Version&query=$.compatibility.verified&colorB=orange&style=for-the-badge) ![GitHub all releases](https://img.shields.io/github/downloads/kgar/foundry-vtt-more-handlebars-helpers/total?style=for-the-badge)

Do you need more handlebars helpers in [Foundry VTT](https://foundryvtt.com/)?

This is the Foundry Module for you!

Helpers that are included in this module:

- [`abs`](#abs)
  - [Params](#params)
  - [Examples](#examples)
- [`add`](#add)
  - [Params](#params-1)
  - [Examples](#examples-1)
- [`avg`](#avg)
  - [Params](#params-2)
  - [Examples](#examples-2)
- [`ceil`](#ceil)
  - [Params](#params-3)
  - [Examples](#examples-3)
- [`divide`](#divide)
  - [Params](#params-4)
  - [Examples](#examples-4)
- [`floor`](#floor)
  - [Params](#params-5)
  - [Examples](#examples-5)
- [`modulo`](#modulo)
  - [Params](#params-6)
  - [Examples](#examples-6)
- [`multiply`](#multiply)
  - [Params](#params-7)
  - [Examples](#examples-7)
- [`random`](#random)
  - [Params](#params-8)
  - [Examples](#examples-8)
- [`regexp`](#regexp)
  - [Params](#params-9)
  - [Examples](#examples-9)
- [`replace`](#replace)
  - [Params](#params-10)
  - [Example](#example)
- [`replaceAll`](#replaceall)
  - [Params](#params-11)
  - [Example](#example-1)
- [`round`](#round)
  - [Params](#params-12)
  - [Examples](#examples-10)
- [`sanitize`](#sanitize)
  - [Params](#params-13)
  - [Example](#example-2)
- [`split`](#split)
  - [Params](#params-14)
  - [Example](#example-3)
- [`subtract`](#subtract)
  - [Params](#params-15)
  - [Examples](#examples-11)
- [`sum`](#sum)
  - [Params](#params-16)
  - [Examples](#examples-12)
- [`table`](#table)
  - [Params](#params-17)
  - [Example](#example-4)
  - [Example with Regex](#example-with-regex)
- [Need More Helpers?](#need-more-helpers)
- [Supporting this Module](#supporting-this-module)

## `abs`

Return the magnitude of `a`.

### Params

- `num` {number}

### Examples

```handlebars
<!-- value: -1 -->
{{ more-handlebars-helpers-abs value }}
<!-- results in: "1" -->
```

## `add`

Return the sum of `a` plus `b`.

### Params

- `a` {number}
- `b` {number}

### Examples

```handlebars
<!-- value: 2 -->
{{ more-handlebars-helpers-add value 2 }}
<!-- results in: "4" -->
```

## `avg`

Returns the average of all numbers in the given array.

### Params

- `...args` {numbers}: one or more number arguments

### Examples

```handlebars
{{ more-handlebars-helpers-avg 1 2 3 4 }}
<!-- results in: "2.5" -->
```

## `ceil`

Get the `Math.ceil()` of the given value.

### Params

- `a` {number}

### Examples

```handlebars
<!-- value: 2.1 -->
{{ more-handlebars-helpers-ceil value }}
<!-- results in: "3" -->
```

## `divide`

Divide `a` by `b`

### Params

- `a` {number}: numerator
- `b` {number}: denominator

### Examples

```handlebars
<!-- value: 2.1 -->
{{ more-handlebars-helpers-divide 4 2 }}
<!-- results in: "2" -->
```

## `floor`

Get the `Math.floor()` of the given value.

### Params

- `value` {number}

### Examples

```handlebars
<!-- value: 2.9 -->
{{ more-handlebars-helpers-floor value }}
<!-- results in: "2" -->
```

## `modulo`

Get the remainder of a division operation.

### Params

- `a` {number}: numerator
- `b` {number}: denominator

### Examples

```handlebars
{{ more-handlebars-helpers-modulo 9 2 }}
<!-- results in: "1" -->
```

## `multiply`

Return the product of `a` times `b`.

### Params

- `a` {number}: factor
- `b` {number}: multiplier

### Examples

```handlebars
{{ more-handlebars-helpers-multiply 3 3 }}
<!-- results in: "9" -->
```

## `random`

Generate a random integer between two values, including the min and max values.

### Params

- `min` {number}
- `max` {number}

### Examples

```handlebars
{{ more-handlebars-helpers-random 1 10 }}
<!-- results in: random integer between 1 and 10 -->
```

## `regexp`

Converts `text` into a `RegExp` instance to be fed into other helpers.

### Params

- `text` {string}
- `flags` (optional, default `"g"`) {string}: flags to use when creating the instance of `RegExp`.

### Examples

```handlebars
<!-- value: "Hello,\n<hr />there,\n<hr />world!" -->
{{ more-handlebars-helpers-replace value (more-handlebars-helpers-regexp '\n<hr />') ' ' }}
<!-- results in: "Hello, there, world!" -->
```

```handlebars
<!-- value: "Hello,\n<hr />there,\n<HR />world!" -->
{{ more-handlebars-helpers-replace value (more-handlebars-helpers-regexp '\n<hr />' 'gi') ' ' }}
<!-- results in: "Hello, there, world!" -->
```

## `replace`

Replace first instance of `searchTextOrRegExp` with `replacementText` in `text`.

### Params

- `text` {string}
- `searchTextOrRegExp` {string}: the text to be replaced, or an instance of `RegExp` (see [regexp](#regexp))
- `replacementText` {string}: the text to replace `searchTextOrRegExp`; it follows the rules of `String.prototype.replace()`, so `RegExp` replacements can replace multiple results while a regular string of text will be replaced once

### Example

```handlebars
<!-- value: "One and Two and Three" -->
{{ more-handlebars-helpers-replace value 'and ', '' }}
<!-- results in: "One Two and Three" -->
```

## `replaceAll`

Replace all instances of `searchTextOrRegExp` with `replacementText` in `text`.

### Params

- `text` {string}
- `searchTextOrRegExp` {string}: the text to be replaced, or an instance of `RegExp` (see [regexp](#regexp))
- `replacementText` {string}: the text to replace `searchTextOrRegExp` throughout `text`

### Example

```handlebars
<!-- value: "One and Two and Three" -->
{{ more-handlebars-helpers-replaceAll value 'and ', '' }}
<!-- results in: "One Two Three" -->
```

## `round`

Round the given number.

### Params

- `number` {number}

### Examples

```handlebars
{{ more-handlebars-helpers-round 2.55 }}
<!-- results in: "3" -->
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

## `subtract`

Return the difference of `a` minus `b`.

### Params

- `a` {number}: left term
- `b` {number}: right right

### Examples

```handlebars
{{more-handlebars-helpers-subtract 10 9 }}
<!-- results in : "1" -->
```

## `sum`

Returns the sum of all numbers in the given array.

### Params

- `...args` {numbers}: two or more number arguments

### Examples

```handlebars
{{ more-handlebars-helpers-sum 1 2 3 4 }}
<!-- results in: "10" -->
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

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/iamkgar) [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kgar)
