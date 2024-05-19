// Default reminder messages
let reminderMessages = [
  "Take deep breaths and refocus",
  "Drink water",
  "Straighten your posture",
  "Walk for 1 minute",
  "Meditate for 2 minutes"
];

// Load user preferences from storage
chrome.storage.sync.get(["reminderMessages", "frequency"], function(data) {
  if (data.reminderMessages) {
    reminderMessages = data.reminderMessages;
  }
  if (data.frequency) {
    reminderFrequency = data.frequency;
  } else {
    reminderFrequency = 60; // 1 hour in seconds
  }
  scheduleReminder();
});

let reminderFrequency;

// Schedule the next reminder
function scheduleReminder() {
  chrome.alarms.create("mindfulness-reminder", {
    delayInMinutes: reminderFrequency / 60
  });
}

// Show the mindfulness reminder
function showReminder() {
  // Get a random reminder message from the array
  const randomIndex = Math.floor(Math.random() * reminderMessages.length);
  const reminderContent = reminderMessages[randomIndex];

  chrome.notifications.create("mindfulness-reminder", {
    type: "basic",
    iconUrl: chrome.runtime.getURL("./icons/icons.png"),
    title: "Mindfulness Reminder",
    message: reminderContent
  });

  scheduleReminder();
}

// Listen for alarm and show reminder
chrome.alarms.onAlarm.addListener(function(alarm) {
  if (alarm.name === "mindfulness-reminder") {
    showReminder();
  }
});