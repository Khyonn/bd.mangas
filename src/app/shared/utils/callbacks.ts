export const clickWhenPressEnter: React.KeyboardEventHandler<HTMLElement> = (
  event
) => {
  if (event.key === "Enter") {
    event.currentTarget.click();
  }
};
