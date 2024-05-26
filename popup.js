document.addEventListener('DOMContentLoaded', function() {
    let status = document.getElementById('status');
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let activeTab = tabs[0];
      chrome.tabs.executeScript(activeTab.id, { file: 'content.js' }, function(result) {
        if (result && result[0]) {
          status.textContent = "Status: ¡Sitio sospechoso!";
          status.style.color = "red";
        } else {
          status.textContent = "Status: Seguro";
          status.style.color = "green";
        }
      });
    });
  });
  