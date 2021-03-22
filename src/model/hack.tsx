export const circularDependencyTsHack = <T,>(arg: T): T => {
  const hackFn = arg as any;
  return hackFn();
};
