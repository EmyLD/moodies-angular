export const modifyLocalStorageValue = (value: string, index: string) => {
  localStorage.setItem(index, value);
};
