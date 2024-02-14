$(document).ready(function () {
    const apiKey = '5f4c5383d6b87b9259d06c03b87438bd';
    const countries = [
        { city: 'Surabaya', country: 'ID' },
        { city: 'New York', country: 'US' },
        { city: 'London', country: 'GB' },
        { city: 'Tokyo', country: 'JP' },
        { city: 'Sydney', country: 'AU' },
        { city: 'Jakarta', country: 'ID'},
        { city: 'Singapore', country: 'SG'},
        { city: 'Beijing', country: 'CN'}
    ];

    const weatherData = [];

    function renderWeatherData() {
        weatherData.sort((a, b) => a.city.localeCompare(b.city));
        weatherData.forEach(cityData => {
            const temperature = cityData.data.main.temp;
            const description = cityData.data.weather[0].description;

            const cityWeatherDiv = `
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <h5 class="card-title">${cityData.city}, ${cityData.country}</h5>
                            <p>Temperature: ${temperature}°C</p>
                            <p>Description: ${description}</p>
                        </div>
                    </div>
                </div>
            `;

            $('#weather-container').append(cityWeatherDiv);
        });
    }

    countries.forEach(cityObj => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityObj.city},${cityObj.country}&appid=${apiKey}&units=metric`;

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                weatherData.push({ city: cityObj.city, country: cityObj.country, data });

                if (weatherData.length === countries.length) {
                    renderWeatherData();
                }
            },
            error: function () {
                const errorMessage = '<p>Failed to fetch weather data</p>';
                $('#weather-container').append(errorMessage);
            }
        });
    });
});
