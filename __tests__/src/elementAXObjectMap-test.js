/* eslint-env mocha */
import expect from 'expect';
import elementAXObjectMap from '../../src/elementAXObjectMap';

describe('domRolesMap', function () {
  it('should be a Map', function () {
    expect(elementAXObjectMap).toBeA(Map);
  });
  it('should have size', function () {
    expect(elementAXObjectMap.size).toBeGreaterThan(0);
  });
});
