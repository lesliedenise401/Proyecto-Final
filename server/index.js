// index.js
const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;

// Endpoint para obtener el clima
app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = "1bfd41c7875f15fc5db7d2f49b1af6f3"; // Reemplaza con tu clave de API de OpenWeather
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching weather data",
      error: error.message
    });
  }
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
const cors = require('cors');
app.use(cors()); // Permite solicitudes desde cualquier origen
