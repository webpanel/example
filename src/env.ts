interface IENV {
  REACT_APP_API_URL: string;
}

export const ENV: IENV = {
  ...{ REACT_APP_API_URL: "https://jsonplaceholder.typicode.com/" },
  ...((window as any).ENV || process.env),
};
