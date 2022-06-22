import random from 'lodash/random'

interface NodeParams {
  name: string
  x: number
  y: number
}

const getInPorts = (name:string, type:string) => {
  const isCopy = type === 'copy'
  const id = `${Date.now()}`
  if (name === '菱形') {
    return [
      {
        tableName: 'germany_credit_data',
        sequence: 1,
        description: '输入1',
        id: id + isCopy?100000: '_in_1',
      },
    ]
  }
  return [
    {
      tableName: 'germany_credit_data',
      sequence: 1,
      description: '输入1',
      id: id + isCopy?100000: '_in_1',
    },
    {
      tableName: 'germany_credit_data',
      sequence: 2,
      description: '输入2',
      id: id + isCopy?200000: '_in_2',
    },
  ]

}

const getOutPorts = (name:string, type:string) => {
  const id = `${Date.now()}`
  const isCopy = type === 'copy'
  if (name === '菱形') {
    return  [
      {
        tableName: 'germany_credit_data',
        sequence: 1,
        description: '输出表1',
        id: id + isCopy?300000: '_out_1',
      },
      {
        tableName: 'germany_credit_data',
        sequence: 2,
        description: '输出表2',
        id: id + isCopy?400000: '_out_2',

      },
      {
        tableName: 'germany_credit_data',
        sequence: 3,
        description: '输出表3',
        id: id + isCopy?500000: '_out_3',

      },
    ]
  }
  return [
    {
      tableName: 'germany_credit_data',
      sequence: 1,
      description: '输出表1',
      id: id + isCopy?300000: '_out_1',
    },
    {
      tableName: 'germany_credit_data',
      sequence: 2,
      description: '输出表2',
      id: id + isCopy?400000: '_out_2',
    },
  ]

}

export const copyNode = ({ name, x, y }: NodeParams) => {
  const id = `${Date.now()}`
  return {
    id,
    name,
    inPorts: getInPorts(name, 'copy'),
    outPorts: getOutPorts(name, 'copy'),
    positionX: x + 200 + random(20, false),
    positionY: y + random(10, false),
    codeName: 'source_11111',
    catId: 1,
    nodeDefId: 111111,
    category: 'source',
    status: 3,
    groupId: 0,
  }
}
export const addNode = (pros: NodeParams) => {
  const {  name, x, y  } = pros;

  console.log(name, pros)
  const id = `${Date.now()}`
  return {
    id,
    name,
    inPorts: getInPorts(name, 'add'),
    outPorts: getOutPorts(name, 'add'),
    positionX: x,
    positionY: y,
    codeName: 'source_11111',
    catId: 1,
    nodeDefId: 111111,
    category: 'source',
    status: 3,
    groupId: 0,
  }
}

export const queryGraph = (id: string) => {
  return {
    lang: 'zh_CN',
    success: true,
    data: initData,
    Lang: 'zh_CN',
  }
}

export const addNodeGroup = async (groupName: string) => {
  return {
    success: true,
    data: {
      group: {
        name: groupName,
        id: Date.now(),
      },
    },
  }
}

const initData = {
  nodes: [
    {
      id: '1603716783816',
      name: '算法组件1',
      inPorts: [
        {
          tableName: 'germany_credit_data',
          sequence: 1,
          description: '输入1',
          id: '1603716783816_in_1',
        },
        {
          tableName: 'germany_credit_data',
          sequence: 2,
          description: '输入2',
          id: '1603716783816_in_2',
        },
      ],
      outPorts: [
        {
          tableName: 'germany_credit_data',
          sequence: 1,
          description: '输出表1',
          id: '1603716783816_out_1',
        },
        {
          tableName: 'germany_credit_data',
          sequence: 2,
          description: '输出表2',
          id: '1603716783816_out_2',
        },
      ],
      positionX: -200,
      positionY: -300,
      codeName: 'source_11111',
      catId: 1,
      nodeDefId: 111111,
      category: 'source',
      status: 3,
      groupId: 0,
    },
    {
      id: '1603716786205',
      name: '算法组件2',
      inPorts: [
        {
          tableName: 'germany_credit_data',
          sequence: 1,
          description: '输入1',
          id: '1603716786205_in_1',
        },
        {
          tableName: 'germany_credit_data',
          sequence: 2,
          description: '输入2',
          id: '1603716786205_in_2',
        },
      ],
      outPorts: [
        {
          tableName: 'germany_credit_data',
          sequence: 1,
          description: '输出表1',
          id: '1603716786205_out_1',
        },
        {
          tableName: 'germany_credit_data',
          sequence: 2,
          description: '输出表2',
          id: '1603716786205_out_2',
        },
      ],
      positionX: -369,
      positionY: -161,
      codeName: 'source_11111',
      catId: 1,
      nodeDefId: 111111,
      category: 'source',
      status: 3,
      groupId: 0,
    },
  ],
  links: [
    {
      source: '1603716783816',
      target: '1603716786205',
      outputPortId: '1603716783816_out_1',
      inputPortId: '1603716786205_in_1',
    },
  ],
}
