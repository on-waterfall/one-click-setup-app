import { Table } from '@renderer/ui-kit/Table'
import React from 'react'
import { DataType, columns } from './Columns'

type WorkersListTablePropsT = {
  data: DataType[]
}

export const WorkersListTable: React.FC<WorkersListTablePropsT> = ({ data }) => {
  const onActivate = (id?: string) => alert(`Activated ${id}`)
  const onDeactivate = (id?: string) => alert(`Deactivated ${id}`)
  const onWithdraw = (id?: string) => alert(`Withdraw ${id}`)

  const generateFN = (id?: string) => console.log(`generate ${id}`)
  const getColumns = columns({
    generateFN,
    activate: onActivate,
    deactivate: onDeactivate,
    withdraw: onWithdraw
  })

  return <Table dataSource={data} columns={getColumns} />
}
