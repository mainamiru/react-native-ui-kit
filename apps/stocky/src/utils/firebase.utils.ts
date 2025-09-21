export type Payload = Record<string, any>;

export function validatePayload<T extends object>(payload: T): Payload {
  const result: Payload = {};
  Object.entries(payload).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      result[key] = null;
    } else if (typeof value === "string" && !value.trim()) {
      result[key] = null;
    } else if (typeof value === "string") {
      result[key] = value.trim();
    } else {
      result[key] = value;
    }
  });
  return result;
}
