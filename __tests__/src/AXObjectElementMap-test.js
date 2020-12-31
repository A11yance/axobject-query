/* eslint-env mocha */
import expect from 'expect';
import AXObjectElementMap from '../../src/AXObjectElementMap';

describe('domRolesMap', function () {
  it('should be a Map', function () {
    expect(AXObjectElementMap instanceof Map).toBe(true);
  });
  it('should have size', function () {
    expect(AXObjectElementMap.size).toBeGreaterThan(0);
  });
});
