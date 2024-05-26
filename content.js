window.onload = function() {
    if (isSuspiciousContent()) {
      alert("¡Cuidado! Este sitio puede ser una tentativa de phishing.");
    }
  }
  
  function isSuspiciousContent() {
    const forms = document.getElementsByTagName('form');
    for (let form of forms) {
      if (form.action.includes('login') && !form.action.startsWith('https')) {
        return true;
      }
    }
    return false;
  }
  