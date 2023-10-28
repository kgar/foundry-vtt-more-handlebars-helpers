import CONSTANTS from "./constants.mjs";
import replaceAll from "./helpers/replaceAll.mjs";
import replace from "./helpers/replaceAll.mjs";

Hooks.on("ready", function () {
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-replace`, replace);
  Handlebars.registerHelper(`${CONSTANTS.MODULE_ID}-replaceAll`, replaceAll);
});
