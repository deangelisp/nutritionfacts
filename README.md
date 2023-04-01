# Nutrition Fact Searching App

This project is a web application that allows users to search for nutrition facts using the API provided by https://api-ninjas.com/api/nutrition. The application is built using ReactJS and Vite and utilizes TailwindCSS for styling. React Query is used for data fetching and caching, React Router is used for routing, and Axios is used for HTTP requests.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine using the command: 

```bash
git clone https://github.com/deangelisp/nutritionfacts.git
```


2. Install dependencies using the command:

```bash
npm install
```

3. Start the development server using the command:

```bash
npm run dev
```


4. Navigate to `http://localhost:3000` in your web browser to view the application.

## Configuration

Before running the application, you need to create a `.env` file in the root directory of the project and add the following line to it:

```bash
VITE_NINJAS_API_KEY=YOUR_API_KEY_HERE
```

Replace `YOUR_API_KEY_HERE` with your API key from https://api-ninjas.com. This step is necessary to authenticate your requests to the API.


## Usage

The application allows users to search for nutrition facts by entering a food item name in the search bar. The application will display a list of matching items along with their nutrition facts. Users can click on an item to view more details about it.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT license. See the LICENSE file for more information.
