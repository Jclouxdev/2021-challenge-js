/*Create a function called interpolation that takes an object with 5 properties : 
step, start, end, callback and duration. This function must calculate the interpolation points, 
(x, y), from the start position to end position depending on the number of steps. 
All the points must be calculated in the duration time.

For each interpolation point you must call callback function with 
parameter - interpolation point ([x, y]). Each interpolation point should be calculated 
with interval of duration / step.*/

const interpolation = ({step, start, end, callback, duration}) => {
  let x = start;
  let y = duration / step;
  let timer = setInterval(() => {
    callback([x, y]);
    x += (end - start) / step;
    y += duration / step;
    if(Math.round(x * 100) / 100 === end) clearInterval(timer);
  }, duration / step);
}