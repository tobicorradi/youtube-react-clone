export const numberWithCommas = (num) => {
  if (num != undefined) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const key = "AIzaSyDWgN6WIIb2CjU6T9S9QveuezdqCd2wji4";
