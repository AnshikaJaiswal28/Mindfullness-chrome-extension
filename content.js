// Establish a long-lived connection to the service worker
const port = chrome.runtime.connect();

// Listen for messages from the service worker
port.onMessage.addListener(function(message) {
  if (message.type === "mindfulness-reminder") {
    showReminder(message.content);
  }
});

// Show the mindfulness reminder
function showReminder(content) {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.backgroundColor = "#fff";
  modal.style.padding = "20px";
  modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  modal.style.zIndex = "9999";

  const message = document.createElement("p");
  message.textContent = content;
  modal.appendChild(message);

  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.marginTop = "10px";
  closeButton.addEventListener("click", function() {
    document.body.removeChild(modal);
  });
  modal.appendChild(closeButton);

  document.body.appendChild(modal);
}