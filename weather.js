class Weather {
  constructor(city){
    this.apiKey = '42d00bca2cac3b33b0c545e158d0aa41';
    this.city = city;
  }

  // Fetch weather from the api
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city){
    this.city = city;
  }
}