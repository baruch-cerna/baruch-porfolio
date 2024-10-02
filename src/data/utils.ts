export function addAttributesToInnerHTMLString(
  innerHTML: string,
  attributes: Record<string, string>
) {
  const attributesString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  return innerHTML.replace(/^<svg/, `<svg ${attributesString}`);
}
