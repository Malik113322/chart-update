import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import axios from 'axios';

const App = () => {

  const [chartArray, setChartArray] = useState([]);
  const [days, setDays] = useState('24h');

  const btns = ['24h', 'Week', '2 Week', '1 Month', '2 Month', '6 Month', '1y', 'Max'];

  const switchChartStats = (key) => {
    console.log(key)

    switch (key) {
      case '24h':
        setDays('24h')
        break;

      case 'Week':
        setDays('7d')
        break;

      case '2 Week':
        setDays('14d')
        break;

      case '1 Month':
        setDays('30d')
        break;
      case '2 Month':
        setDays('60d')
        break;
      case '6 Month':
        setDays('180d')
        break;
      case '1y':
        setDays('365d')
        break;
      case 'Max':
        setDays('max')
        break;

      default:
      case '24h':
        setDays('24h')
        break;
    }
  };

  useEffect(() => {

    const fetchChart = async () => {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`);
      // console.log(data.prices);
      setChartArray(data.prices)

    }
    fetchChart();

  }, [days]);

  /*old project Api
  (`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`); */

  return (
    <div>
      <Chart arr={chartArray} days={days} />

      <article>
        {
          btns.map((i) => (
            <button onClick={() => switchChartStats(i)}>{i}</button>
          ))
        }
      </article>
    </div>
  )
}

export default App;
