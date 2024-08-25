
<strong>Project Title: Memory Game</strong>

<strong>Description:</strong>

For this project, I built a Memory game using React. The game involves matching pairs of cards, and it includes a scoreboard to track the current score and the best score achieved. The cards' images and texts are fetched from an external API, making the game dynamic and engaging.

<strong>Technologies Used:</strong>

<ul>
  <li><strong>React:</strong> For building the user interface and managing state with hooks.</li>
  <li><strong>CSS:</strong> For styling the application.</li>
  <li><strong>External API:</strong> For fetching images and text for the cards.</li>
</ul>
<strong>Features:</strong>

<ul>
  <li><strong>Game Mechanics:</strong>
    <ul>
      <li><strong>Card Matching:</strong> The game involves cards that need to be matched by flipping them. When a user clicks on a card, it reveals its content. If two flipped cards match, they remain visible; otherwise, they flip back.</li>
      <li><strong>Score Tracking:</strong> A scoreboard displays the current score, which increases with each successful match.</li>
      <li><strong>Best Score:</strong> The highest score achieved during gameplay is tracked and displayed as the “Best Score.”</li>
    </ul>
  </li>
  <li><strong>Card Management:</strong>
    <ul>
      <li><strong>Randomization:</strong> Cards are displayed in a random order each time the game is started or the component is mounted.</li>
      <li><strong>Card Data:</strong> Card images and texts are fetched from an external API. Options include using Giphy for animated images or a Pokémon API for themed images.</li>
    </ul>
  </li>
  <li><strong>Components and Structure:</strong>
    <ul>
      <li><strong>App Component:</strong> Manages the overall game logic and state, including score management and card shuffling.</li>
      <li><strong>Card Component:</strong> Represents individual cards, handles click events, and displays the card content.</li>
      <li><strong>Scoreboard Component:</strong> Displays the current score and best score.</li>
      <li><strong>API Service:</strong> Handles fetching card data from an external API.</li>
    </ul>
  </li>
  <li><strong>Styling:</strong>
    <ul>
      <li><strong>Visual Appeal:</strong> The application is styled to provide a visually engaging user experience. This includes card designs, layout, and overall game aesthetics.</li>
    </ul>
  </li>
  <li><strong>Deployment:</strong> The project is pushed to GitHub and deployed to a hosting service like Vercel or Netlify.</li>
</ul>
<strong>Implementation Steps:</strong>

<ul>
  <li><strong>Set Up React Project:</strong> Created a new React project using Create React App.</li>

  To run this React app in your web browser, follow these steps:

Ensure you have Node.js and npm installed: You can check this by running the following commands in your terminal:

bash
Copy code
node -v
npm -v
If you don’t have them installed, download and install Node.js from https://nodejs.org/, which includes npm.

Navigate to your project directory: Open your terminal or command prompt and navigate to the root of your project:

bash
Copy code
cd odin-memory-card-TOUPLOAD
Install dependencies: Run the following command to install all the necessary dependencies specified in your package.json:

bash
Copy code
npm install
Start the development server: Run the following command to start your development server using Vite:

bash
Copy code
npm run dev
Open the app in your browser: After running the npm run dev command, you should see output in your terminal that looks like this:

arduino
Copy code
VITE vX.X.X  ready in Xs

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
Open your browser and navigate to the URL shown under Local, usually http://localhost:5173.

Your React app should now be running in your browser! Any changes you make to your code should automatically be reflected in the browser thanks to hot-reloading.
  <li><strong>Design Application Structure:</strong> Planned the components and folder structure. Decided on components for the game logic (App), individual cards (Card), and the scoreboard (Scoreboard).</li>
  <li><strong>Fetch Data from API:</strong> Implemented an API service to fetch card images and text. Chose an API based on the desired theme (e.g., Giphy or Pokémon).</li>
  <li><strong>Implement Game Features:</strong> Created the card matching logic and integrated it with React hooks for managing state. Added functions to shuffle and display cards randomly.</li>
  <li><strong>Styling:</strong> Applied CSS to style the cards, scoreboard, and overall game layout.</li>
  <li><strong>Push to GitHub and Deploy:</strong> Committed the code to GitHub and deployed the application to Vercel or Netlify for online access.</li>
</ul>
