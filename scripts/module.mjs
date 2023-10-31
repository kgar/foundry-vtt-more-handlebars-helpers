import CONSTANTS from './constants.mjs';
import replaceAll from './helpers/replaceAll.mjs';
import replace from './helpers/replace.mjs';
import split from './helpers/split.mjs';
import sanitize from './helpers/sanitize.mjs';

Hooks.on('ready', function () {
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-replace`, replace);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-replaceAll`, replaceAll);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-sanitize`, sanitize);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-split`, split);
});
