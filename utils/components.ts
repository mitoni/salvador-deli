export function getComponentFromTypeName(_name?: string) {
  const splitted = _name?.split(/(?=[A-Z][^A-Z])/);
  const name = splitted?.at(-1)?.toLowerCase();
  return name;
}
