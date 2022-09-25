/**
 * @flow
 */

import iterationDecorator from "./util/iterationDecorator";
import AXObjects from './AXObjectsMap';

type TAXObjectElementTuple = [AXObjectName, Array<AXObjectModelRelationConcept>];
type TAXObjectElements = Array<TAXObjectElementTuple>;

const AXObjectElements: TAXObjectElements = [];

for (let [name, def] of AXObjects.entries()) {
  const relatedConcepts = def.relatedConcepts;
  if (Array.isArray(relatedConcepts)) {
    relatedConcepts.forEach((
      relation,
    ): void => {
      if (relation.module === 'HTML') {
        const concept = relation.concept;
        if (concept) {
          let index = AXObjectElements.findIndex(([key]) => key === name);
          if (index === -1) {
            AXObjectElements.push([name, []]);
            index = AXObjectElements.length - 1;
          }
          AXObjectElements[index][1].push(concept);
        }
      }
    });
  }
}

const AXObjectElementMap: TAXObjectQueryMap<
  TAXObjectElements,
  AXObjectName,
  Array<AXObjectModelRelationConcept>,
> = {
  entries: function (): TAXObjectElements {
    return AXObjectElements;
  },
  forEach: function (
    fn: (Array<AXObjectModelRelationConcept>, AXObjectName, TAXObjectElements) => void,
    thisArg: any = null,
  ): void {
    for (let [key, values] of AXObjectElements) {
      fn.call(thisArg, values, key, AXObjectElements);
    }
  },
  get: function (key: AXObjectName): ?Array<AXObjectModelRelationConcept> {
    const item = AXObjectElements.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: AXObjectName): boolean {
    return !!this.get(key);
  },
  keys: function (): Array<AXObjectName> {
    return AXObjectElements.map(([key]) => key);
  },
  values: function (): Array<Array<AXObjectModelRelationConcept>> {
    return AXObjectElements.map(([, values]) => values);
  },
};

export default (
  iterationDecorator(
    AXObjectElementMap,
    AXObjectElementMap.entries(),
  ): TAXObjectQueryMap<TAXObjectElements, AXObjectName, Array<AXObjectModelRelationConcept>>
);
