export const currencyAPI = {
  // emulate server
  async getCurrency() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          EUR: 1,
          USA: 1.12,
          RUB: 75.45,
        };
        resolve(data);
      }, 5000);
    });

    return await promise;
  },
};
