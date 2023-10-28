import handlebarsHelpers from '@budibase/handlebars-helpers';

Hooks.on('ready', function() {
    var helpers = handlebarsHelpers();

    console.log(helpers);
});

