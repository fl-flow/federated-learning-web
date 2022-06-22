import { Dom, Node } from '@antv/x6'
import { ReactShape, } from '@antv/x6-react-shape'
import { NODE_WIDTH, NODE_HEIGHT, DIAMOND_WIDTH, DIAMOND_HEIGHT } from '@/constants/graph'


export class BaseNode extends ReactShape {
  // eslint-disable-next-line class-methods-use-this
  isGroup() {
    return false
  }
}

export class X6DemoNode extends BaseNode {
  getInPorts() {
    return this.getPortsByGroup('in')
  }

  getOutPorts() {
    return this.getPortsByGroup('out')
  }
}

Node.registry.register('ais-rect-port', X6DemoNode as any)

X6DemoNode.config({
  width: NODE_WIDTH,
  height: NODE_HEIGHT,
  shape: 'ais-rect-port',
  ports: {
    groups: {
      in: {
        position: { name: 'top' },
        zIndex: 2,
      },
      out: {
        position: { name: 'bottom' },
        zIndex: 2,
      },
    },
  },
  attrs: {
    body: {
      magnet: false,
      fill: 'none',
      stroke: 'none',
      refWidth: '100%',
      refHeight: '100%',
      zIndex: 1,
    },
  },
  portMarkup: [
    {
      tagName: 'foreignObject',
      selector: 'fo',
      attrs: {
        width: 6,
        height: 6,
        x: -3,
        y: -3,
        zIndex: 10,
        // magnet决定是否可交互
        magnet: 'true',
      },
      children: [
        {
          ns: Dom.ns.xhtml,
          tagName: 'body',
          selector: 'foBody',
          attrs: {
            xmlns: Dom.ns.xhtml,
          },
          style: {
            width: '100%',
            height: '100%',
          },
          children: [
            {
              tagName: 'span',
              selector: 'content',
              style: {
                width: '100%',
                height: '100%',
              },
            },
          ],
        },
      ],
    },
  ],
})


export class X6DemoNode1 extends BaseNode {
  getInPorts() {
    return this.getPortsByGroup('in')
  }

  getOutPorts() {
    return this.getPortsByGroup('out')
  }
}

Node.registry.register('custom-polygon', X6DemoNode1 as any)
X6DemoNode1.config({
  shape: 'polygon',
  // x: 40,
  // y: 40,
  width: DIAMOND_WIDTH,
  height: DIAMOND_HEIGHT,
  ports: {
    groups: {
      in: {
        position: {
          name: 'absolute',
          args: { x: 0, y: 0 },
        },
      },
      out: {
        position: { name: 'absolute',args: { x: 0, y: 0 }, },
        zIndex: 2,
      },
    },
    items: [
      {
        group: 'in',
        args: {
          x: 40,
          y: 0,
        },
      },
      {
        group: 'out',
        args: {
          x: 0,
          y: 40,
        },
      },
      {
        group: 'out',
        args: {
          x: 40,
          y: 80,
        },
      },
      {
        group: 'out',
        args: {
          x: 80,
          y: 40,
        },
      },
    ]
  },
  // label: 'polygon',
  points: '0,10 10,0 20,10 10,20',
  attrs: {
    body: {
      fill: '#fff',
      stroke: '#9254de',
      // 指定 refPoints 属性，多边形顶点随图形大小自动缩放
      // https://x6.antv.vision/zh/docs/api/registry/attr#refpointsresetoffset
      refPoints: '0,10 10,0 20,10 10,20',
    },
  },
  portMarkup: [
    {
      tagName: 'foreignObject',
      selector: 'fo',
      attrs: {
        width: 6,
        height: 6,
        x: -3,
        y: -3,
        zIndex: 10,
        // magnet决定是否可交互
        magnet: 'true',
      },
      children: [
        {
          ns: Dom.ns.xhtml,
          tagName: 'body',
          selector: 'foBody',
          attrs: {
            xmlns: Dom.ns.xhtml,
          },
          style: {
            width: '100%',
            height: '100%',
          },
          children: [
            {
              tagName: 'span',
              selector: 'content',
              style: {
                width: '100%',
                height: '100%',
              },
            },
          ],
        },
      ],
    },
  ],

})


export class X6DemoGroupNode extends BaseNode {
  // eslint-disable-next-line class-methods-use-this
  isGroup() {
    return true
  }
}

X6DemoGroupNode.config({
  ports: {
    groups: {
      in: {
        position: { name: 'top' },
        zIndex: 2,
      },
      out: {
        position: { name: 'bottom' },
        zIndex: 2,
      },
    },
  },
  portMarkup: [
    {
      tagName: 'foreignObject',
      selector: 'fo',
      attrs: {
        width: 6,
        height: 6,
        x: -3,
        y: -3,
        zIndex: 10,
        // magnet决定是否可交互
        magnet: 'true',
      },
      children: [
        {
          ns: Dom.ns.xhtml,
          tagName: 'body',
          selector: 'foBody',
          attrs: {
            xmlns: Dom.ns.xhtml,
          },
          style: {
            width: '100%',
            height: '100%',
          },
          children: [
            {
              tagName: 'span',
              selector: 'content',
              style: {
                width: '100%',
                height: '100%',
              },
            },
          ],
        },
      ],
    },
  ],
})
