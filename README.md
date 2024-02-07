# Tailwind CSS Tutorial

## Installation

- Install "tailwindcss" via npm:

  "npm install -D tailwindcss"

- Create your "tailwind.config.js" file

  "npx tailwindcss init

## Configure your template paths

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{html,js}"],

theme: {
extend: {},
},

plugins: [],
}

## Add the tailwind directives to your css

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

@tailwind base;

@tailwind components;

@tailwind utilities;

## Start the Tailwind CLI build process

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

## Start using Tailwind in your HTML

Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

`<link href="./output.css" rel="stylesheet">`

