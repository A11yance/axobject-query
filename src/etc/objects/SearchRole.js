/**
 * @flow
 */
const SearchRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'search',
      },
    },
  ],
  type: 'structure',
};

export default SearchRole;