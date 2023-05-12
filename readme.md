# Windows Downloads Cleaner

This project contains a simple Node.js script that automatically cleans up the Downloads folder on a Windows system upon startup. The code sorts the files in your Downloads folder based on their file extensions into separate subfolders.

## Prerequisites

- Node.js (version 12 or higher) installed on your system

## Installation

1. Clone this repository or download the code and extract it on your local system.

```
git clone https://github.com/yourusername/windows-downloads-cleaner.git
```

2. Navigate to the project directory and run `npm install` to install the required dependencies.

```
cd windows-downloads-cleaner
npm install
```

## Customization

Edit the `directory` value in the `index.js` file to specify your Downloads folder path. For example:

```javascript
const directory = "/Users/YourUsername/Downloads";
```

## Usage

Run the script manually by entering the following command in the project directory:

```
node index.js
```

To automatically run the script upon Windows startup, create a shortcut to the `index.js` file in the Startup folder. The path to the Startup folder is typically:

```
C:\Users\YourUsername\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
```

## License

This project is licensed under the MIT License. For more information, please refer to the [LICENSE](LICENSE) file.

## Contributing

If you have any suggestions for improvements or bug fixes, please create a pull request or open an issue on Github.
