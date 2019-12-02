/**
 * @flow
 */
const ParagraphRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'p',
      },
    },
  ],
  type: 'structure',
};

export default ParagraphRole;