/**
 * @flow
 */

import AXObjects from './AXObjectsMap';

const AXObjectElementMap: AXObjectElementMap = new Map([]);

for (let [name, def] of AXObjects) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((
      relation,
    ): void => {
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept) {
          const relationConcepts = AXObjectElementMap.get(name) || new Set([]);
          relationConcepts.add(concept);
          AXObjectElementMap.set(name, relationConcepts);
        }
      }
    });
  }
}

export default AXObjectElementMap;
