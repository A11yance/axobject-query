/**
 * @flow
 */
const ImageMapRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'img',
        attributes: [
          {
            name: 'usemap',
          },
        ],
      },
    },
  ],
  type: 'structure',
};

export default ImageMapRole;