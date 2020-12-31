/* eslint-env mocha */
import expect from 'expect';
import AXObjectsMap from '../../src/AXObjectsMap';

describe('domRolesMap', function () {
  it('should be a Map', function () {
    expect(AXObjectsMap instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(AXObjectsMap.size).toBeGreaterThan(0);
  });
});
