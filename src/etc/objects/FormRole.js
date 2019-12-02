/**
 * @flow
 */
const FormRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'form',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'form',
      },
    },
  ],
  type: 'structure',
};

export default FormRole;