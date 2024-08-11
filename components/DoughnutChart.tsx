"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [20000,25000,30000],
                backgroundColor: ['#0747b6', '#2265d8','#2f91fa']
            }
        ],
        labels: ['DFC','UBA','NC']
    }
  return (
    <Doughnut 
    data={data}
    options={
        {
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
    />
  )
}

export default DoughnutChart