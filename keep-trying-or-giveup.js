/*Create a retry function, that takes 2 arguments
a count indicates maximum amount of retries
an async callback, that will be called on every try
retry returns a function that calls and returns value from callback function passing its 
arguments and catches errors. If error is caught it should return the callback function with catch. 
If number of errors exceeds count then throw an Error.

for count of 3, the function will be called at most 4 times: the initial call + 3 retries.

Create a timeout function, that takes 2 arguments
a delay indicates maximum wait time
an async callback, that will be called
timeout returns a function either that calls and returns value from callback function passing its 
arguments or returns Error('timeout') if callback didn't resolve before delay time has reached.*/
const retry = (count, callback) => {
  return (...args) => {
    return new Promise(async (resolve, reject) => {
      let retryCount = count;
      let catchedError;
      while (retryCount >= 0) {
        try {
          const cbRes = await callback(...args);
          resolve(cbRes);
        } catch (e) {
          catchedError = e;
        }

        retryCount--;
      }
      reject(catchedError);
    });
  };
};

const timeout = (delay, callback) => {
  return async (...args) => {
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject('timeout'), delay);
    });
    const cbPromise = new Promise(async (resolve, reject) => {
      try {
        const cbRes = await callback(...args);
        resolve(cbRes);
      } catch (e) {
        reject(e);
      }
    });

    try {
      const raceResult = await Promise.race([timeoutPromise, cbPromise]);
      return raceResult;
    } catch (e) {
      throw new Error(e);
    }
  };
};