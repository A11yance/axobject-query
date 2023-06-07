/**
 * @flow
 */

import { dequal } from 'dequal/lite';
import AXObjects from './AXObjectsMap';
import iterationDecorator from './util/iterationDecorator';

type TElementAXObjectTuple = [AXObjectModelRelationConcept, Array<AXObjectName>];
type TElementAXObjects = Array<TElementAXObjectTuple>;

const elementAXObjects: TElementAXObjects = [];

for (let [name, def] of AXObjects.entries()) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((
      relation,
    ): void => {
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept != null) {
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
          if (!Array.isArray(axObjects)) {
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

const elementAXObjectMap: TAXObjectQueryMap<
  TElementAXObjects,
  AXObjectModelRelationConcept,
  Array<AXObjectName>,
> = {
  entries: function (): TElementAXObjects {
    return elementAXObjects;
  },
  forEach: function (
    fn: (Array<AXObjectName>, AXObjectModelRelationConcept, TElementAXObjects) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of elementAXObjects) {
      fn.call(thisArg, values, key, elementAXObjects);
    }
  },
  get: function (key: AXObjectModelRelationConcept): ?Array<AXObjectName> {
    const item = elementAXObjects.find(tuple => (
      key.name === tuple[0].name && dequal(key.attributes, tuple[0].attributes)
    ));
    return item && item[1];
  },
  has: function (key: AXObjectModelRelationConcept): boolean {
    return !!elementAXObjectMap.get(key);
  },
  keys: function (): Array<AXObjectModelRelationConcept> {
    return elementAXObjects.map(([key]) => key);
  },
  values: function (): Array<Array<AXObjectName>> {
    return elementAXObjects.map(([, values]) => values);
  },
};

export default (
  iterationDecorator(
    elementAXObjectMap,
    elementAXObjectMap.entries(),
  ): TAXObjectQueryMap<TElementAXObjects, AXObjectModelRelationConcept, Array<AXObjectName>>
);
