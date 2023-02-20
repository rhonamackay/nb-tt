
# TV-Bland 1.0

Interactive TV show schedule website using information from the TVMaze API. 


## Check it out

Visit the latest deployment on Vercel: https://tv-bland-six.vercel.app/


## Tech Stack

**Front end:** React, TypeScript, TailwindCSS, Next.js

**Back end:** TVMaze's schedule and TV show API

## Design and colour reference
Low fidelity wireframes were provided for this project, but I was free to design the look, feel and interactivity of the website. 

My design was inspired by the retro look of Teletext and Ceefax. I used Google font [VT323](https://fonts.google.com/specimen/VT323), and a colour scheme from [Galax's Teletext CSS stylesheet](https://galax.xyz/TELETEXT/TELETEXT.CSS). Favicon is the ['Old TV' icon](https://icons8.com/icon/AZwb90aYpYkE/old-tv) by Icons8 customised with the teletext palette. 

### Colour palette 
    000000 black
    ff0000 red
    00ff00 green
    ffff00 yellow
    0000ff blue
    ff00ff magenta
    00ffff cyan
    ffffff white
 
All text and background colour contrast ratios meet accessibility standards. 

### Responsive design 
The project has a responsive design which performs well on a variety of devices. End to end testing covers desktop and mobile devices. 
## Run Locally

Clone the project

```bash
  git clone https://github.com/rhonamackay/nb-tt.git
```

Go to the project directory

```bash
  cd tv-bland
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Running Tests

The project has both end to end and component tests written with Cypress. 

```bash
  npx cypress open
```

You should see the Cypress GUI open where you can explore both component and end to end tests. 


## Version 2.0: plan

There are a number of improvements I would make to my MVP with more time. 

- GraphQL wrapper for TVMaze REST API
    - TVMaze's REST API end points return a significant ammount of information that the website does not need. 
    - Wrapping the REST API in a GraphQL server would allow for flexible requests that fetch only the data needed by the page, inclreasing efficiency and optimisation. 
    - I plan to do this using Next.js's API routes in /pages/api. The API routes are bundled on the server-side, so it would not increase the client-side bundle. 
    - I considered including this in my MVP (you can see a test file in the page/api folder). However, as I have not worked with GraphQL APIs before, after some research I decided not to prioritise it for version 1.0 as trade off of time to research, plan and build a high-quality GraphQL wrapper was too much.

- Image size responsivity

- The option to choose TV schedule information based on different countries (currently defaults to US)
