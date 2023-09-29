import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { SkeletonChart } from './SkeletonChart '
import { CardBrandsReport } from '@/types'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartBrandProps {
  loading: boolean
  data?: CardBrandsReport | null
  labelColor: string
}

export function PieChartBrand({
  loading,
  data,
  labelColor,
}: PieChartBrandProps) {
  let dataPie

  if (loading) {
    return <SkeletonChart />
  }

  if (data) {
    dataPie = {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Total transações',
          data: Object.values(data),
          backgroundColor: ['#2D95EC', '#F6BA2A', '#F64D2A', '#164D2A'],
          borderWidth: 0.5,
          borderColor: '#27272A',
        },
      ],
    }
  }

  if (dataPie) {
    return (
      <div>
        <h1 className="text-center mb-6 font-semibold">Bandeiras</h1>
        <Pie
          options={{
            color: labelColor,
          }}
          data={dataPie}
        />
      </div>
    )
  }
}
