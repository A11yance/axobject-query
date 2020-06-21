/**
 * @flow
 */

import AXObjects from './AXObjectsMap';

const AXObjectRoleMap: AXObjectRoleMap = new Map([]);

for (let [name, def] of AXObjects) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((
      relation,
    ): void => {
      if (relation.module === 'ARIA') {
        const concept = relation.concept;
        if (concept) {
          const relationConcepts = AXObjectRoleMap.get(name) || new Set([]);
          relationConcepts.add(concept);
          AXObjectRoleMap.set(name, relationConcepts);
        }
      }
    });
  }
}

export default AXObjectRoleMap;
