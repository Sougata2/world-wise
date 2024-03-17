import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add you first country by clicking on a country on the map" />
    );
  let countries = cities.reduce((arr, city) => {
    if (arr.map((city) => city.country).includes(city.country)) return arr;
    else
      return arr.concat({
        cityName: city.cityName,
        country: city.country,
        emoji: city.emoji,
        id: city.id,
      });
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
