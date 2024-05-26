chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (isPhishing(details.url)) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

function isPhishing(url) {
  const phishingSites = ["example-phishing.com", "another-phishing.com"];
  const hostname = new URL(url).hostname;
  return phishingSites.includes(hostname);
}
