/**
 * @flow
 */
const SwitchRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'switch',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'checkbox',
          },
        ],
      },
    }
  ],
  type: 'widget',
};

export default SwitchRole;
