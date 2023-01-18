import * as functions from "firebase-functions";
import got from "got";
import admin from "firebase-admin";
admin.initializeApp();

type Data = {
  latitude: string;
  longitude: string;
  generationtime_ms: string;
  utc_offset_seconds: string;
  timezone: string;
  timezone_abbreviation: string
  elevation: string,
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  }
}

export const getWeather = functions.https.onRequest(async (req, res) => {
  const coordinates = {
    latitude: "51.51",
    longitude: "-0.13"
  }

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current_weather=true`
  
  try {
    const data: Data = await got.get(url).json()
    const currentWeatherData = {temperature: data.current_weather.temperature, time: data.current_weather.time}
  
    await admin.firestore()
      .collection("weather")
      .add(currentWeatherData);
    
    res.status(201);
    res.send(JSON.stringify(currentWeatherData));
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send("Something went wrong, please try again")
  }
});
