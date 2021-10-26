function GetStyles(styles) {
  const properties = Object.keys(styles);

  return properties.map((key) => `${key}:${styles[key]}`).join(";");
}
