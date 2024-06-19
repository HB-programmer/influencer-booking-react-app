# Influencer Selection App

This is a React-based application for selecting and booking influencers, using Ant Design for the UI. This README will guide you through the setup and installation process.

## Table of Contents


1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [License](#license)


## Features

- Select and book influencers based on preferences.
- User-friendly interface with Ant Design components.
- Dynamic filtering and selection of influencers.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (>= 16.x)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))
- [Git](https://git-scm.com/)

## Installation

Follow these steps to get the application up and running:

### 1. Clone the Repository

```bash
git clone git@github.com:your-username/influencer-selection-app.git
cd influencer-selection-app
```

### 2. Install Dependency

```bash
npm install

or 

yarn install
```


## Usage

###  Run the application

```bash
npm start
```

 - [Set Preferences] : Use the form to set your preferences for selecting an influencer.
 - [Select Influencer] : Browse the list of influencers that match your criteria and select one.
 - [Booking Confirmation] : Review and confirm your booking details.


## Project Structure


influencer-selection-app/
│
├── public/                  # Static files
├── src/
│   ├── components/          # React components
│   ├── pages/               # Page components
│   ├── services/            # API service functions
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point
│   └── ...
├── config/
│   └── google_cloud_service_config/
│       └── your-service-account.json  # Google Cloud service account key
├── .env                     # Environment variables
├── package.json             # npm configuration
└── README.md                # This file



## License

### Notes
- *Images and GIFs*: Add relevant images or GIFs to the docs folder for demonstration and link them in the README.
- *Environment Variables*: Adjust .env file content according to your actual configuration.
- *Configuration Details*: Replace placeholders (like your-bucket-name) with actual values specific to your setup.
