const clearDisplay = (display) => {
  while (display.firstChild) display.removeChild(display.firstChild);
};

export default clearDisplay;
