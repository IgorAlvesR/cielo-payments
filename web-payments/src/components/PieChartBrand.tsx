import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { SkeletonChart } from './SkeletonChart '
import { CardBrandsReport } from '@/types'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartBrandProps {
  loading: boolean
  data?: CardBrandsReport | null
}

export function PieChartBrand({ loading, data }: PieChartBrandProps) {
  let dataPie
  if (data) {
    dataPie = {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Total transações',
          data: Object.values(data),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
  }

  if (loading) {
    return <SkeletonChart />
  }

  if (dataPie) {
    return (
      <div>
        <h1 className="text-center mb-6 text-zinc-800 font-semibold">
          Bandeiras
        </h1>
        <Pie data={dataPie} />
      </div>
    )
  }
}
