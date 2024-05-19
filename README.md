# Mindfulness Reminder Chrome Extension

This is a Google Chrome extension that provides periodic mindfulness reminders to help users take breaks, practice deep breathing, and engage in other stress-reducing activities while working on their computers.

## Features

- Displays randomized mindfulness reminders with various prompts and exercises
- Allows users to customize the reminder frequency and messages

## Installation

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable the "Developer mode" toggle switch in the top right corner.
4. Click on the "Load unpacked" button and select the folder containing the extension files.
5. The extension should now be loaded and visible in the Chrome toolbar.

## Usage

1. After installing the extension, you can customize the reminder settings by clicking on the extension icon in the toolbar and selecting "Options".
2. In the options page, you can adjust the reminder frequency (in minutes) and add or modify the reminder messages (one per line).
3. Click the "Save" button to save your preferences.
4. The extension will continue to display mindfulness reminders based on your specified frequency and settings.

## Files

- `manifest.json`: Metadata and configuration file for the Chrome extension.
- `background.js`: Background script that handles the scheduling and display of mindfulness reminders.
- `options.html`: HTML file for the options page where users can customize reminder settings.
- `options.js`: JavaScript file that handles the loading and saving of user preferences.
- `icons/`: Folder containing the extension's icon files.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
