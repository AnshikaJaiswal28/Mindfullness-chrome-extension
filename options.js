// Load user preferences from storage
chrome.storage.sync.get(["reminderMessages", "frequency"], function(data) {
  if (data.reminderMessages) {
    document.getElementById("reminderMessages").value = data.reminderMessages.join("\n");
  }
  if (data.frequency) {
    document.getElementById("frequency").value = data.frequency / 60; // Convert seconds to minutes
  } else {
    document.getElementById("frequency").value = 1; // 1 minute default
  }
});

// Save user preferences to storage
document.getElementById("save").addEventListener("click", function() {
  const reminderMessages = document.getElementById("reminderMessages").value.split("\n").filter(Boolean);
  const frequency = document.getElementById("frequency").value * 60; // Convert minutes to seconds
  chrome.storage.sync.set({
    reminderMessages: reminderMessages,
    frequency: frequency
  }, function() {
    console.log("Preferences saved.");
  });
});