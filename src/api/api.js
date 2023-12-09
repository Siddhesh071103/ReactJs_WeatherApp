const apiKey = 'd4adfa8c1663df8a450a9724b177f321';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
}

export default getWeather;