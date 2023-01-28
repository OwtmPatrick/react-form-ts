export const getFieldLabel = (name?: string) => {
  if (name) {
    const splitted = name.split('.');

    return splitted[splitted.length - 1];
  }

  return '';
};
