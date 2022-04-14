export const WeatherImage = (weatherType) => {
        switch (weatherType) {
            case 'clouds':
                return "assets/cloud.svg";
            case 'rain':
                return "assets/rain.svg";
            case 'clear':
                return "assets/sun.svg";
            case 'storm':
                return "assets/storm.svg";
            case 'snow':
                return "assets/snow.svg";
            default:
                return "assets/cloud.svg";
    }
}