'use strict'

describe("Plus One", function() {
    let plusOne = require('../index.js')

    it("increments the given value by one", function() {
        expect(plusOne(7)).toEqual(8)
    })
    it("increments the given value by one", function() {
        expect(plusOne(6)).toEqual(8)
    })
    it("increments the given value by one", function() {
        expect(plusOne('7')).toEqual(8)
    })
    it("increments the given value by one", function() {
        expect(plusOne('seven')).toEqual(8)
    })
    it("increments the given value by one", function() {
        expect(plusOne( (21 / 3) )).toEqual(8)
    })
    it("increments the given value by one", function() {
        expect(plusOne( Math.floor(21.2 / 3) )).toEqual(8)
    })

})
