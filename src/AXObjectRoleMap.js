/**
 * @flow
 */

import iterationDecorator from "./util/iterationDecorator";
import AXObjects from './AXObjectsMap';

type TAXObjectRoleTuple = [AXObjectName, Array<AXObjectModelRelationConcept>];
type TAXObjectRoleElements = Array<TAXObjectRoleTuple>;

const AXObjectRoleElements: TAXObjectRoleElements = [];

for (let [name, def] of AXObjects.entries()) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((
      relation,
    ): void => {
      if (relation.module === 'ARIA') {
        const concept = relation.concept;
        if (concept) {
          let index = AXObjectRoleElements.findIndex(([key]) => key === name);
          if (index === -1) {
            AXObjectRoleElements.push([name, []]);
            index = AXObjectRoleElements.length - 1;
          }
          AXObjectRoleElements[index][1].push(concept);
        }
      }
    });
  }
}

const AXObjectRoleMap: TAXObjectQueryMap<
  TAXObjectRoleElements,
  AXObjectName,
  Array<AXObjectModelRelationConcept>
> = {
  entries: function (): TAXObjectRoleElements {
    return AXObjectRoleElements;
  },
  forEach: function (
    fn: (Array<AXObjectModelRelationConcept>, AXObjectName, TAXObjectRoleElements) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of AXObjectRoleElements) {
      fn.call(thisArg, values, key, AXObjectRoleElements);
    }
  },
  get: function (key: AXObjectName): ?Array<AXObjectModelRelationConcept> {
    const item = AXObjectRoleElements.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: AXObjectName): boolean {
    return !!AXObjectRoleMap.get(key);
  },
  keys: function (): Array<AXObjectName> {
    return AXObjectRoleElements.map(([key]) => key);
  },
  values: function (): Array<Array<AXObjectModelRelationConcept>> {
    return AXObjectRoleElements.map(([, values]) => values);
  }
};

export default (
  iterationDecorator(
    AXObjectRoleMap,
    AXObjectRoleMap.entries(),
  ): TAXObjectQueryMap<TAXObjectRoleElements, AXObjectName, Array<AXObjectModelRelationConcept>>
);