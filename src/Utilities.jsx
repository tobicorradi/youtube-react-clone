export const numberWithCommas = (num) => {
  if (num != undefined) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const key = process.env.REACT_APP_API_KEY;
