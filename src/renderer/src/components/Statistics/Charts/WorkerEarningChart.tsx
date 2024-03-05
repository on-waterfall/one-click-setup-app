import React, { useMemo } from 'react'
import { ChartWrapper } from './styles'
import CanvasJSReact from '@canvasjs/react-stockcharts'
import { getEarningOptions } from '@renderer/helpers/charts'
import { DataPointsIncome } from '@renderer/types/data'
import { Title } from '@renderer/ui-kit/Typography'
import { Flex } from 'antd'
import { StockOutlined } from '@ant-design/icons'

const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart

type PropsT = {
  data: DataPointsIncome
  loading?: boolean
}

export const WorkerEarningChart: React.FC<PropsT> = ({ data }) => {
  const options = useMemo(() => getEarningOptions(data), [data])
  const containerProps = {
    width: '100%',
    height: '400px',
    margin: 'auto'
  }
  return (
    <ChartWrapper>
      <Title level={5}>
        <Flex gap={10}>
          <StockOutlined />
          Consult the chart to calculate Worker earnings
        </Flex>
      </Title>
      <CanvasJSStockChart containerProps={containerProps} options={options} />
    </ChartWrapper>
  )
}