/**
 * @flow
 */
const ArticleRole:AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: 'ARIA',
      concept: {
        name: 'article',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'article',
      },
    },
  ],
  type: 'structure',
};

export default ArticleRole;