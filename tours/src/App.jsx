import { useEffect, useState } from 'react';
import Loading from './components/Loading.jsx';
import Tours from './components/Tours.jsx';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const tour = await resp.json();
      setTours(tour);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;