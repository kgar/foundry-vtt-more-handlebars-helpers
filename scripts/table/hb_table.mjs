/** @returns {any} */
export default function hb_table() {
  // HB:  {{ table string val1 result1 val2 result2 val3 result3 ... }}
  if (arguments.length < 4) return ''; // string val1 result1 options
  if (arguments[0] == undefined || arguments[0] == null) return arguments[0];
  let len = arguments.length - 1;
  let options = arguments[len];
  let value = arguments[0].toString();
  for (let i = 1; i < len; i += 2) {
    let result = value.match(RegExp(`^${arguments[i]}$`, 'u'));
    if (result) {
      value = arguments[i + 1];
      // Replace all occurrences of $n with the corresponding match
      if (result.length > 1) {
        console.info(JSON.stringify(result.groups, null, 2));
        value = value.replaceAll(/\$(\d+)/g, (match, p1) => {
          let param = +p1; // first parameter = 1
          if (param < result.length) return result[param];
          else return match; // number is too high!
        });
      }
    }
  }
  return hb_utils_value(value, this, options);
}

function hb_utils_value(val, context, options) {
  if (hb_utils_isOptions(val)) {
    return hb_utils_value(null, val, options);
  }
  if (hb_utils_isOptions(context)) {
    return hb_utils_value(val, {}, context);
  }
  if (hb_utils_isBlock(options)) {
    return !!val ? options.fn(context) : options.inverse(context);
  }
  return val;
}

function hb_utils_isOptions(val) {
  return hb_utils_isObject(val) && hb_utils_isObject(val.hash);
}

function hb_utils_isObject(val) {
  return typeof val === 'object';
}

function hb_utils_isBlock(options) {
  return (
    hb_utils_isOptions(options) &&
    typeof options.fn === 'function' &&
    typeof options.inverse === 'function'
  );
}
