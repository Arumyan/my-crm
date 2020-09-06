export const currencyAPI = {
  // emulate server
  async getCurrency() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          EUR: 1,
          USD: 1.12,
          RUB: 75.45,
        };
        resolve(data);
      }, 2000);
    });

    return await promise;
  },
};
