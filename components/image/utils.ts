export const checkForValueUrl = (url: string): boolean =>
  Array.isArray(
    url.match(
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    )
  );
