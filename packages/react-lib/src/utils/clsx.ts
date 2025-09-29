/**
 * Converts a value to a string suitable for use as a CSS class name.
 * Handles strings, numbers, arrays, and objects.
 *
 * @param mix - The value to convert.
 * @returns A string representing the class names.
 */
function toVal(mix: unknown): string {
  let str = "";

  // If mix is a string or number, add it directly
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  }
  // If mix is an object (array or plain object)
  else if (typeof mix === "object" && mix !== null) {
    // If mix is an array, recursively process each element
    if (Array.isArray(mix)) {
      for (let k = 0; k < mix.length; k++) {
        if (mix[k]) {
          const y = toVal(mix[k]);
          if (y) {
            if (str) str += " ";
            str += y;
          }
        }
      }
    }
    // If mix is a plain object, add keys with truthy values
    else {
      const obj = mix as Record<string, unknown>;
      for (const y in obj) {
        if (obj[y]) {
          if (str) str += " ";
          str += y;
        }
      }
    }
  }

  return str;
}

/**
 * Combines multiple arguments into a single string of class names.
 * Accepts strings, numbers, arrays, and objects.
 *
 * @param args - The values to combine into class names.
 * @returns A space-separated string of class names.
 *
 * @example
 * clsx('foo', { bar: true, baz: false }, ['qux', 'quux'])
 * // returns 'foo bar qux quux'
 */
export function clsx(...args: unknown[]): string {
  let str = "";
  for (const tmp of args) {
    if (tmp) {
      const x = toVal(tmp);
      if (x) {
        if (str) str += " ";
        str += x;
      }
    }
  }
  return str;
}

export default clsx;
