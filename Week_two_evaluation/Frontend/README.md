# ☀️ Weather Dashboard

A modern, responsive weather application built with React and TypeScript that provides real-time weather information using multiple weather APIs with dynamic unit conversion.

![Weather Dashboard](./src/assets/Provus_edited_logo.png)

## ✨ Features

- 🌤️ **Dual API Support**: Toggle between OpenWeather API and WeatherAPI.com
- 🌡️ **Dynamic Unit Conversion**: Switch between Imperial (°F, mph), Metric (°C, m/s), and Standard (K, m/s) units
- 📍 **Geolocation**: Automatically detects and displays weather for your current location
- 🔍 **City Search**: Search for weather information by city name
- 📊 **Comprehensive Data**: View temperature, humidity, pressure, wind speed, sunrise/sunset times
- 🎨 **Modern UI**: Beautiful glassmorphism design with smooth animations
- ⚡ **Real-time Updates**: Instant weather data updates on location or unit change
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Technologies Used

- **React 18** - Modern React with Hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Context API** - Global state management
- **OpenWeather API** - Weather data provider
- **WeatherAPI.com** - Alternative weather data provider

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
│   └── Provus_edited_logo.png
├── classes/             # Custom class definitions
│   └── ApiError.ts
├── components/          # React components
│   ├── DisplayWeather.tsx
│   ├── Header.tsx
│   ├── HomeCards.tsx
│   ├── InnerDisplayCard.tsx
│   ├── Loader.tsx
│   └── Select.tsx
├── contexts/            # React Context for state management
│   └── GlobalContext.tsx
├── interfaces/          # TypeScript interfaces
│   └── interfaces.ts
├── pages/               # Page components
│   ├── CurrentWeather.tsx
│   ├── Forecast.tsx
│   └── Home.tsx
├── utils/               # Utility functions
│   ├── changeDataByUnits.ts
│   ├── constants.ts
│   ├── dateFormatter.ts
│   ├── fetchApi.ts
│   └── geolocation.ts
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `constants.ts` file in `src/utils/` with your API keys:
   ```typescript
   export const OPEN_WEATHER_API = "https://api.openweathermap.org/data/2.5/";
   export const OPEN_WEATHER_API_KEY = "your_openweather_api_key";
   export const WEATHERAPI_COM_API = "https://api.weatherapi.com/v1/";
   export const WEATHERAPI_API_KEY = "?key=your_weatherapi_key&q=";
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔑 Getting API Keys

### OpenWeather API
1. Visit [OpenWeather](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key from your dashboard

### WeatherAPI.com
1. Visit [WeatherAPI](https://www.weatherapi.com/)
2. Sign up for a free account
3. Get your API key from the dashboard

## 💡 Usage

### Selecting Weather API
Use the dropdown in the header to choose between:
- 🌤 **OpenWeather API** - Comprehensive weather data
- ☁️ **WeatherAPI** - Alternative weather source

### Changing Units
Select your preferred unit system from the header:
- **Imperial** - Fahrenheit (°F), miles per hour (mph)
- **Metric** - Celsius (°C), meters per second (m/s)
- **Standard** - Kelvin (K), meters per second (m/s)

### Searching for Locations
1. Type a city name in the search box
2. Click the search button (🔍)
3. Weather data will be displayed instantly

### Using Current Location
The app automatically detects your location on first load and displays the weather for your area.

## 🎯 Key Components

### CurrentWeather
Displays current weather conditions including:
- Temperature (current, max, min)
- Humidity
- Atmospheric pressure
- Wind speed and direction
- Sunrise and sunset times

### Forecast
Shows weather forecast for upcoming days (feature in development)

### Header
Contains API selection, unit conversion controls, and app branding

### DisplayWeather
Renders weather data with dynamic unit conversion and beautiful card layouts

## 🔄 Unit Conversion System

The app features a sophisticated unit conversion system that:
- Converts temperature between °F, °C, and K
- Converts wind speed between mph and m/s
- Maintains data integrity across API switches
- Updates displays in real-time without re-fetching data

### Conversion Formulas
- **Fahrenheit to Celsius**: (F - 32) × 5/9
- **Celsius to Kelvin**: C + 273.15
- **mph to m/s**: mph × 0.44704

## 🎨 Design Features

- **Smooth Animations**: Hover effects and transitions
- **Responsive Grid**: Adapts to all screen sizes
- **Color Scheme**: Sky blue gradient theme
- **Icons**: Weather and functional icons throughout

## 🐛 Error Handling

The app includes comprehensive error handling for:
- Invalid API keys (401)
- Invalid city names (404)
- Rate limit exceeded (429)
- Network errors (500)
- Geolocation permission denied

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Built with ❤️ by Krushna D

## 🙏 Acknowledgments

- [OpenWeather](https://openweathermap.org/) for weather data API
- [WeatherAPI](https://www.weatherapi.com/) for alternative weather data
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [React](https://react.dev/) for the amazing framework

## 📧 Contact

For questions or support, please open an issue in the repository.

---

⭐ Star this repository if you find it helpful!