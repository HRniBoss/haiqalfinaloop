function buttonClicked(){ //function to search weather from API link based on value entered

    var city = document.getElementById("city_input").value;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
          console.log(data); //output the API into console.
          console.log("City : " + data.name);
          console.log("Temperature in Celsius: " + (data.main.temp - 273.15)); 
          console.log("Humidity: " + data.main.humidity); 
          console.log("Pressure: " + data.main.pressure);
          console.log("Coordinate: " + data.coord.lat);
  
  
          document.getElementById("demo").innerHTML="City: " + data.name + "<br/>Temperature in Celsius: " + (data.main.temp - 273.15) + 
                                                    "<br/>Humidity: " + data.main.humidity +  "<br/>Pressure: " + data.main.pressure
                                                    + "<br/>Coordinate: " + data.main.lat;
  
    } )
  
  }