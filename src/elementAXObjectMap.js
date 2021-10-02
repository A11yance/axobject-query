/**
 * @flow
 */

import AXObjects from './AXObjectsMap';

type TElementAXObjectTuple = [AXObjectModelRelationConcept, Array<string>];
type TElementAXObjects = Array<TElementAXObjectTuple>;

type TElementAXObjectMap = {|
  entries: () => TElementAXObjects,
  get: (key: AXObjectModelRelationConcept) => ?Array<string>,
  has: (key: AXObjectModelRelationConcept) => boolean,
  keys: () => Array<AXObjectModelRelationConcept>,
  values: () => Array<Array<string>>,
|};

const elementAXObjects: TElementAXObjects = [];

for (let [name, def] of AXObjects.entries()) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((
      relation,
    ): void => {
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept) {
          const conceptStr = JSON.stringify(concept);
          let axObjects;
          let index = 0;
          for (; index < elementAXObjects.length; index++) {
            const key = elementAXObjects[index][0];
            if (JSON.stringify(key) === conceptStr) {
              axObjects = elementAXObjects[index][1];
              break;
            }
          }
          if (!axObjects) {
            axObjects = [];
          }
          const loc = axObjects.findIndex(item => item === name);
          if (loc === -1) {
            axObjects.push(name);
          }
          if (index < elementAXObjects.length) {
            elementAXObjects.splice(index, 1, [concept, axObjects]);
          } else {
            elementAXObjects.push([concept, axObjects]);
          }
        }
      }
    })
  }
}

const elementAXObjectMap: TElementAXObjectMap = {
  entries: function (): TElementAXObjects {
    return elementAXObjects;
  },
  get: function (key: AXObjectModelRelationConcept): ?Array<string> {
    const item = elementAXObjects.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: AXObjectModelRelationConcept): boolean {
    return !!this.get(key);
  },
  keys: function (): Array<AXObjectModelRelationConcept> {
    return elementAXObjects.map(([key]) => key);
  },
  values: function (): Array<Array<string>> {
    return elementAXObjects.map(([, values]) => values);
  }
};

export default elementAXObjectMap;
