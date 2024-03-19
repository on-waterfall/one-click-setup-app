import { useMemo, useState } from 'react'
import { PageBody } from '@renderer/components/Page/Body'
import { PageHeader } from '@renderer/components/Page/Header'
import { Flex, Layout, Popover } from 'antd'
import { IconButton } from '@renderer/ui-kit/Button'
import { CloseOutlined, CaretRightOutlined, WalletOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import { Tabs } from '@renderer/ui-kit/Tabs'
import { Alert } from '@renderer/ui-kit/Alert'
import { WorkerViewStatistics } from '@renderer/containers/Workers/WorkerViewStatistics'
import { WorkerViewValidator } from '@renderer/containers/Workers/WorkerViewValidator'
import { WorkerViewCoordinator } from '@renderer/containers/Workers/WorkerViewCoordinator'
import { WorkerViewInformation } from '@renderer/containers/Workers/WorkerViewInformation'
import { useGetById } from '../../hooks/workers'
import { getViewLink } from '@renderer/helpers/navigation'
import { routes } from '@renderer/constants/navigation'
import { getActions } from '../../helpers/workers'
import { Worker, ActionTxType } from '../../types/workers'
import { ActionModal } from '../../containers/Workers/ActionModal'

const getTabs = (worker?: Worker) => [
  {
    label: 'Main Information',
    children: <WorkerViewInformation item={worker} />,
    key: '1',
    closable: false
  },
  {
    label: 'Coordinator',
    children: <WorkerViewCoordinator item={worker} />,
    key: '2',
    closable: false
  },
  {
    label: 'Validator',
    children: <WorkerViewValidator item={worker} />,
    key: '3',
    closable: false
  },
  {
    label: 'Statistics',
    children: <WorkerViewStatistics item={worker} />,
    key: '4',
    closable: false
  }
]

export const WorkerViewPage = () => {
  const workerId = useParams()?.id
  const [actionModal, setActionModal] = useState<null | ActionTxType>(null)
  const { isLoading, data: worker, error } = useGetById(workerId, { refetchInterval: 5000 })

  const tabs = useMemo(() => getTabs(worker), [worker])
  const [activeKey, setActiveKey] = useState(tabs[0].key)
  const onTabChange = (newActiveKey: string) => setActiveKey(newActiveKey)
  const onActionModalChange = (newActiveKey: null | ActionTxType) => setActionModal(newActiveKey)

  const breadcrumb = [
    {
      title: 'Workers',
      link: getViewLink(routes.nodes.list)
    },
    {
      title: `#${workerId}`
    }
  ]

  const actions = getActions(worker)
  return (
    <Layout>
      <PageHeader
        breadcrumb={breadcrumb}
        actions={
          <Flex dir="row" gap={6}>
            {actions[ActionTxType.activate] && (
              <Popover content="Activate" placement="bottom">
                <IconButton
                  icon={<CaretRightOutlined />}
                  shape="default"
                  size="middle"
                  onClick={() => onActionModalChange(ActionTxType.activate)}
                />
              </Popover>
            )}
            {actions[ActionTxType.deActivate] && (
              <Popover content="Deactivate" placement="bottom">
                <IconButton
                  icon={<CloseOutlined />}
                  shape="default"
                  size="middle"
                  onClick={() => onActionModalChange(ActionTxType.deActivate)}
                />
              </Popover>
            )}
            {actions[ActionTxType.withdraw] && (
              <Popover content="Withdraw" placement="bottom">
                <IconButton
                  icon={<WalletOutlined />}
                  shape="default"
                  size="middle"
                  onClick={() => onActionModalChange(ActionTxType.withdraw)}
                />
              </Popover>
            )}
          </Flex>
        }
      />
      <PageBody isLoading={isLoading}>
        {error && <Alert message={error.message} type="error" />}
        <Tabs items={tabs} onChange={onTabChange} activeKey={activeKey} />
        <ActionModal id={workerId} type={actionModal} onClose={() => onActionModalChange(null)} />
      </PageBody>
    </Layout>
  )
}
