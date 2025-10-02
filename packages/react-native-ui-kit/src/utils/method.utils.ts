/**
 * Checks if the given value is a number.
 * @param value The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export function isNumber(value: any): boolean {
  return !isNaN(Number(value));
}

/**
 * Checks if the given value is a string.
 * @param value The value to check.
 * @returns True if the value is a string, false otherwise.
 */
export function isString(value: any): boolean {
  return typeof value === "string";
}

/**
 * Checks if the given value is a boolean.
 * @param value The value to check.
 * @returns True if the value is a boolean, false otherwise.
 */
export function isBoolean(value: any): boolean {
  return typeof value === "boolean";
}

/**
 * Checks if the given value is an object.
 * @param value The value to check.
 * @returns True if the value is an object, false otherwise.
 */
export function isObject(value: any): boolean {
  return value && typeof value === "object" && !Array.isArray(value);
}

/**
 * Checks if the given value is a function.
 * @param value The value to check.
 * @returns True if the value is a function, false otherwise.
 */
export function isFunction(value: any): boolean {
  return typeof value === "function";
}

/**
 * Checks if the given value is an array.
 * @param value The value to check.
 * @returns True if the value is an array, false otherwise.
 */
export function isArray(value: any): boolean {
  return Array.isArray(value);
}

/**
 * Checks if the given value is null.
 * @param value The value to check.
 * @returns True if the value is null, false otherwise.
 */
export function isNull(value: any): boolean {
  return value === null;
}

/**
 * Checks if the given value is undefined.
 * @param value The value to check.
 * @returns True if the value is undefined, false otherwise.
 */
export function isUndefined(value: any): boolean {
  return value === undefined;
}

/**
 * Checks if the given value is null or undefined.
 * @param value The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isNil(value: any): boolean {
  return value === null || value === undefined;
}
