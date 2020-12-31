/**
 * @flow
 */

import AXObjects from './AXObjectsMap';

const elementAXObjectMap: ElementAXObjectMap = new Map([]);

for (let [name, def] of AXObjects) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((
      relation,
    ): void => {
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept) {
          const conceptStr = JSON.stringify(concept);

          let axObjects = ([...elementAXObjectMap.entries()]
            .find(
              ([key]) => JSON.stringify(key) === conceptStr)|| []
            )[1];

          if (!axObjects) {
            axObjects = new Set([]);
          }
          axObjects.add(name);
          elementAXObjectMap.set(concept, axObjects);
        }
      }
    })
  }
}

export default elementAXObjectMap;
