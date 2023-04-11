import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);


const Chart = ({ arr = [], days }) => {

    // console.log(arr);

    const prices = [];
    const date = [];

    for (let i = 0; i < arr.length; i++) {
        if (days === '24h') date.push(new Date(arr[i][0]).toLocaleTimeString())
        else date.push(new Date(arr[i][0]).toLocaleDateString());

        prices.push(arr[i][1])

    }

    return (
        <div>


            <Line
                options={{
                    responsive: true,
                    aspectRatio: 0 | 0,
                    borderWidth: 2,
                    pointRadius: 0,
                }}

                data={{
                    labels: date,
                    datasets: [{
                        label: 'Price in $',
                        data: prices,
                        backgroundColor: '#c6cc58',
                        borderColor: '#17010e',
                    }]
                }}
            />
        </div>
    )
}

export default Chart;
