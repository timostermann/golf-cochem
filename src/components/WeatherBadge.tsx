import { type ComponentPropsWithoutRef, useEffect, useState } from "react";

import cn from "classnames";
import { Cloudy, PartlyCloudy, Rain, Sun, Night } from "@/icons";

const getWeatherIcon = (icon: string | null) => {
  if (!icon || typeof icon) return <Cloudy />;
  switch (icon) {
    case "clear-night":
    case "partly-cloudy-night":
      return <Night />;
    case "partly-cloudy-day":
      return <PartlyCloudy />;
    case "rain":
    case "sleet":
    case "snow":
    case "thunderstorm":
      return <Rain />;
    case "clear-day":
      return <Sun />;
    case "cloudy":
    case "fog":
    case "wind":
    default:
      return <Cloudy />;
  }
};

export const WeatherBadge = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const [degrees, setDegrees] = useState(0);
  const [icon, setIcon] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "https://api.brightsky.dev/current_weather?lat=50.1193&lon=7.1663",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        },
      );

      const { weather } = await response.json();
      const { temperature, icon } = weather || {};
      const parsedTemperature = Number(temperature);
      if (parsedTemperature && !Number.isNaN(parsedTemperature)) {
        setDegrees(temperature);
      }
      setIcon(icon);
    };

    void fetchWeather();
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-3xl bg-white p-1.5 pl-4 text-xl font-medium text-primary-800 shadow-md",
        className,
      )}
      {...props}
    >
      <span className="sr-only">Aktuell:</span>
      {degrees} °C
      <div className="size-9 rounded-full bg-primary-800 p-2 text-white">
        {getWeatherIcon(icon)}
      </div>
    </div>
  );
};
