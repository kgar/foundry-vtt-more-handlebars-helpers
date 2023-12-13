import CONSTANTS from './constants.mjs';
import replaceAll from './helpers/replaceAll.mjs';
import replace from './helpers/replace.mjs';
import split from './helpers/split.mjs';
import sanitize from './helpers/sanitize.mjs';
import table from './helpers/table.mjs';
import regExp from './helpers/regExp.mjs';
import * as math from './helpers/math/math.mjs';

Hooks.on('ready', function () {
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-abs`, math.abs);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-add`, math.add);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-avg`, math.avg);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-ceil`, math.ceil);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-divide`, math.divide);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-floor`, math.floor);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-modulo`, math.modulo);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-multiply`, math.multiply);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-random`, math.random);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-regexp`, regExp);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-replace`, replace);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-replaceAll`, replaceAll);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-round`, math.round);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-sanitize`, sanitize);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-split`, split);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-subtract`, math.subtract);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-sum`, math.sum);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-table`, table);
});
