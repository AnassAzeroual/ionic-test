# Welcome to Dream App

## Description

Dream App is a responsive application designed to provide a welcoming page accessible on both PC and mobile devices. This project aims to create a user-friendly interface that adapts to various screen sizes seamlessly.

## Functionality

The welcome page includes a form that must validate upon clicking the button in PC mode. Additionally, the text blocks with icons are implemented as components for modularity and reusability.

Upon clicking the button, an asynchronous call is made to the endpoint [https://api.db-ip.com/v2/free/self](https://api.db-ip.com/v2/free/self):

- If the sum of the numbers in the IP address is greater than 100, an "OK" alert is displayed.
- If the sum of the numbers in the IP address is less than or equal to 100, a "KO" alert is displayed.

For example, for the IP address 62.39.10.29, the sum is 140.

## Screenshots

### PC UI

![PC UI](https://gitlab.com/inventivit-test/ionic-responsive-app/-/raw/main/images/pc_ui.png)

### Mobile UI

![Mobile UI](https://gitlab.com/inventivit-test/ionic-responsive-app/-/raw/main/images/mobile_ui.png)

## Development Environment

Dream App is developed using Ionic Framework, leveraging Angular for frontend functionality.

## Installation

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd dream-app`
3. Install dependencies: `npm install`

## Usage

- Start the development server: `npm start`
- Build the application: `npm run build`
- Run tests: `npm test`
- Lint the code: `npm run lint`

## Dependencies

- Angular: Frontend framework for building dynamic web applications.
- Capacitor: Native runtime for building cross-platform mobile apps with web technologies.
- Ionic/Angular: UI framework for building high-quality mobile and desktop applications.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or fixes.

## License

This project is licensed under the [MIT License](LICENSE).
