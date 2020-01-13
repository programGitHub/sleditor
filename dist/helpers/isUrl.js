function isUrl(str) {
  return str.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/);
}

export default isUrl;