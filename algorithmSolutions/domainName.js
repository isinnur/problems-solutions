function domainName(url) {
  url = url.replace("https://", "").replace("http://", "").replace("www.", "");
  return url.split(".")[0];
}
