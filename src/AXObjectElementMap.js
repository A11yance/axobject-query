/**
 * @flow
 */

import AXObjects from './AXObjectsMap';

type TAXObjectElementTuple = [string, Array<AXObjectModelRelationConcept>];
type TAXObjectElements = Array<TAXObjectElementTuple>;

type TAXObjectElementMap = {|
  entries: () => TAXObjectElements,
  get: (key: string) => ?Array<AXObjectModelRelationConcept>,
  has: (key: string) => boolean,
  keys: () => Array<string>,
  values: () => Array<Array<AXObjectModelRelationConcept>>,
|};

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

const AXObjectElementMap: TAXObjectElementMap = {
  entries: function (): TAXObjectElements {
    return AXObjectElements;
  },
  get: function (key: string): ?Array<AXObjectModelRelationConcept> {
    const item = AXObjectElements.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: string): boolean {
    return !!this.get(key);
  },
  keys: function (): Array<string> {
    return AXObjectElements.map(([key]) => key);
  },
  values: function (): Array<Array<AXObjectModelRelationConcept>> {
    return AXObjectElements.map(([, values]) => values);
  }
};

export default AXObjectElementMap;
