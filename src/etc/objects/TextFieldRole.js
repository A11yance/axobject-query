/**
 * @flow
 */
const TextFieldRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'textbox',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'input',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'text',
          },
        ],
      },
    },
  ],
  type: 'widget',
};

export default TextFieldRole;