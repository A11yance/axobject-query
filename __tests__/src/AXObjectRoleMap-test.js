/* eslint-env mocha */
import expect from 'expect';
import AXObjectRoleMap from '../../src/AXObjectRoleMap';

describe('domRolesMap', function () {
  it('should be a Map', function () {
    expect(AXObjectRoleMap instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(AXObjectRoleMap.size).toBeGreaterThan(0);
  });
});
