## Manual Testing Notes

The handlebars helpers can be tested via compiling and invoking a template with a data value in the devtools console window while running Foundry VTT. For example, here is `split`:

```js
Handlebars.compile(`<ul>{{#each (more-handlebars-helpers-split value ',')}}<li>{{this}}</li>{{/each}}</ul>`)({ value: 'a,b,c'})
```