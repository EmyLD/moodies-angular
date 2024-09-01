export const onClickModifyUsername = (value: string, index: string) => {
  localStorage.setItem(index, value);
};
