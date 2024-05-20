import Chart from 'react-apexcharts';

const AllAnalyticsChart = () => {
    // Generate fake data
    const generateData = (count, yrange) => {
        let i = 0;
        const series = [];
        while (i < count) {
            const x = new Date(2018, i, 1);
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push([x.getTime(), y]);
            i++;
        }
        return series;
    };

    const seriesData = [
        {
            name: 'Series 1',
            data: generateData(12, { min: 30, max: 90 })
        },
        {
            name: 'Series 2',
            data: generateData(12, { min: 30, max: 90 })
        }
    ];

    const options = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            },
            background: '#f4f4f4', // Background color
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: 'MMM yy'
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow'
        },
        title: {
            text: 'Area Chart with Datetime X-axis'
        },
        tooltip: {
            x: {
                format: 'MMM yy'
            }
        }
    };

    return (
        <div style={{  }}>
            <Chart options={options} series={seriesData} type="area" height={350} />
        </div>
    );
};

export default AllAnalyticsChart;
