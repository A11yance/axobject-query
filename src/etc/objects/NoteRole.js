/**
 * @flow
 */
const NoteRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'note',
      },
    },
  ],
  type: 'structure',
};

export default NoteRole;