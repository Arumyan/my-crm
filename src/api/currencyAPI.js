export const currencyAPI = {
  // emulate server
  async getCurrency() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          EUR: 88.47,
          USD: 74.98,
          RUB: 1,
        };
        resolve(data);
      }, 2000);
    });

    return await promise;
  },
};
