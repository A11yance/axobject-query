/**
 * @flow
 */
const RadioGroupRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'radiogroup',
      },
    },
  ],
  type: 'structure',
};

export default RadioGroupRole;