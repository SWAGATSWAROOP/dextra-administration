export const normalizedName = (name: string): string =>
  name.replace(/\s+/g, "_").toLowerCase();
