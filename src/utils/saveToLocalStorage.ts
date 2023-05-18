

export function utilizeLocalStorage(
    key: string,
    value?: {}
  ) {
    const prevlocalStorage = window.localStorage.getItem(key);
    if (!value) return prevlocalStorage;
    if (prevlocalStorage) {
      const prevState = JSON.parse(prevlocalStorage);
      window.localStorage.setItem(
        key,
        JSON.stringify({
          ...prevState,
          ...value,
        })
      );
    } else {
      window.localStorage.setItem(
        key,
        JSON.stringify({
          ...value,
        })
      );
    }
  }