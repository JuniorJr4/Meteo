<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../src/style.css" />
    <link
      rel="shortcut icon"
      href="../src/icons/5-favicon-32.png"
      type="image/x-icon"
    />
    <title>Météo</title>
  <script defer src="main.js"></script></head>
  <body>
    <header class="header">
      <div class="title">
        <h1>Météo App</h1>
        <img src="../src/icons/5-new.png" alt="app icon" id="icon" />
      </div>
      <form>
        <label for="location-input">Enter a city or zip code:</label>
        <input id="location-input" type="text" name="location" required />
        <button id="submit" type="submit">Get Weather</button>
      </form>
    </header>
    <div id="content">
      <aside id="aside">
        <h3 id="location-name"></h3>
        <img src="#" alt="weather icon" id="current-icon" />
        <p id="current-condition"></p>
        <p id="current-temp"></p>
        <p id="chance-of-rain"></p>
      </aside>

      <div class="main">
        <div class="main-header">
          <h2 class="forecast">Weekly Forecast</h2>
        </div>
        <div id="day-cards-wrapper"></div>
      </div>
    </div>
  </body>
</html>
