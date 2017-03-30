/**
 * @flow
 */
const SliderRole = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'slider',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'range',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default SliderRole;