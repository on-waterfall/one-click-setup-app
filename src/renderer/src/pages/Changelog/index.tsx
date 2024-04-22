import { PageHeader } from '@renderer/components/Page/Header'
import { PageBody } from '@renderer/components/Page/Body'
import { Layout, Timeline } from 'antd'
import { Text } from '../../ui-kit/Typography'

const breadcrumb = [
  {
    title: 'Changelog'
  }
]
const items = [
  {
    children: (
      <>
        <Text size="sm">0.3.0 beta - 22.04.2024</Text>
        <p>New: #13 Windows signing app</p>
        <p>New: #44 MacOS signing app</p>
        <p>New: #49 Update logo and icons</p>
        <p>New: #42 Adding a changelog page</p>
        <p>New: #10 Adding an auto update feature</p>
        <p>New: #10 Adding App version to Status Bar</p>
        <p>Improve: #44 reduce app size</p>
        <p>Fix: Adding additional workers</p>
      </>
    )
  },

  {
    children: (
      <>
        <Text size="sm">0.2.1 beta - 10.04.2024</Text>
        <p>Improve: Save all errors to log file without alert</p>
        <p>Fix: Get Validator status</p>
      </>
    )
  },
  {
    children: (
      <>
        <Text size="sm">0.2.0 beta - 05.04.2024</Text>
        <p>New: Initial Public release</p>
      </>
    )
  }
]
export const ChangelogPage = () => {
  return (
    <Layout>
      <PageHeader breadcrumb={breadcrumb} />
      <PageBody>
        <Timeline items={items} mode="left" />
      </PageBody>
    </Layout>
  )
}
