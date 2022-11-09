const CURRENCRY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',
  });

  export const formatCurrencry = (number: any) => {
    return CURRENCRY_FORMATTER.format(number);
  };

  export const getDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en');
  };

  // console.log('REACT_APP_VITE_MODE', import.meta.env.VITE_MODE);

  // process.env.REACT_APP_VERSION === 'development'
  //     ? 'http://localhost:5000'
  //     : 'http://lienServerDeDeveloppement';

  export const baseUrl = 'http://localhost:9000'
