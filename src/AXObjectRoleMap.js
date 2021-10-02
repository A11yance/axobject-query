/**
 * @flow
 */

import AXObjects from './AXObjectsMap';

type TAXObjectRoleTuple = [string, Array<AXObjectModelRelationConcept>];
type TAXObjectRoleElements = Array<TAXObjectRoleTuple>;

type TAXObjectRoleMap = {|
  entries: () => TAXObjectRoleElements,
  get: (key: string) => ?Array<AXObjectModelRelationConcept>,
  has: (key: string) => boolean,
  keys: () => Array<string>,
  values: () => Array<Array<AXObjectModelRelationConcept>>,
|};

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

const AXObjectRoleMap: TAXObjectRoleMap = {
  entries: function (): TAXObjectRoleElements {
    return AXObjectRoleElements;
  },
  get: function (key: string): ?Array<AXObjectModelRelationConcept> {
    const item = AXObjectRoleElements.find(tuple => (tuple[0] === key) ? true : false);
    return item && item[1];
  },
  has: function (key: string): boolean {
    return !!this.get(key);
  },
  keys: function (): Array<string> {
    return AXObjectRoleElements.map(([key]) => key);
  },
  values: function (): Array<Array<AXObjectModelRelationConcept>> {
    return AXObjectRoleElements.map(([, values]) => values);
  }
};

export default AXObjectRoleMap;
