# Piano App

This is a React application for a piano app. The app allows users to play piano notes using their keyboard or mouse. The app also displays the history of the notes played.

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/danicostas-xyz/pianoapp-react.git
   cd pianoapp-react
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the development server, run:
```bash
npm run dev
```

To build the project for production, run:
```bash
npm run build
```

To preview the production build, run:
```bash
npm run preview
```

To lint the project, run:
```bash
npm run lint
```

## Project Structure

The project structure is as follows:

```
pianoapp-react/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── keyNotes.js
│   │   └── piano.mp3
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Piano.jsx
│   │   └── PianoKey.jsx
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Piano.css
│   │   └── PianoKey.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── variables.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Dependencies

The project has the following dependencies:

- React
- React DOM
- use-sound

## Development Tools

The project uses the following development tools:

- Vite
- ESLint
