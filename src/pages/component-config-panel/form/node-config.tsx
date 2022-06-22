import React from 'react'
import { Form, Input, Select } from 'antd'
import { useObservableState } from '@/common/hooks/useObservableState'
import { useExperimentGraph } from '@/pages/rx-models/experiment-graph'
import 'antd/lib/style/index.css'

export interface Props {
  name: string
  experimentId: string
  nodeId: string
}

export const NodeFormDemo: React.FC<Props> = ({
  name,
  nodeId,
  experimentId,
}) => {
  const [form] = Form.useForm()
  const { Option } = Select;
  const expGraph = useExperimentGraph(experimentId)
  const [node] = useObservableState(() => expGraph.activeNodeInstance$)

  const onValuesChange = async ({ name, gender }: { name: string, gender:string }) => {
    console.log(node, gender)
    await expGraph.renameNode(nodeId, name, gender)
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ name: node ? node.name : '' }}
      onValuesChange={onValuesChange}
      requiredMark={false}
    >
      <Form.Item label="节点名称" name="name">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label={name}>
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="gender" label="选择项" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
        >
          <Option value="modelServiseName">modelServiseName</Option>
        </Select>
      </Form.Item>
    </Form>
  )
}
