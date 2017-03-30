/* eslint-env mocha */
import expect from 'expect';
import AXObjects from '../../src/AXObjectsMap';

describe('domRolesMap', function () {
  it('should be a Map', function () {
    expect(AXObjects).toBeA(Map);
  });
  it('should have size', function () {
    expect(AXObjects.size).toBeGreaterThan(0);
  });
});
