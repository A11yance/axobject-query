/**
 * @flow
 */

type AXObjectModelDefinition = {
  relatedConcepts: Array<AXObjectModelRelation>,
  type: 'window' | 'structure' | 'widget' | 'generic',
};

type AXObjectModelRelation = {
  module?: 'HTML' | 'ARIA',
  concept?: AXObjectModelRelationConcept,
};

/* The concept in a related domain that informs behavior mappings.
 * Related domains include: HTML and ARIA.
 */
type AXObjectModelRelationConcept = {
  name?: string,
  attributes?: Array<AXObjectModelRelationConceptAttribute>,
};

type AXObjectModelRelationConceptAttribute = {
  name: string,
  value?: string,
};
