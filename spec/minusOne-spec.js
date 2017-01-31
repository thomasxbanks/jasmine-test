'use strict'

describe("Minus One", function() {
    let minusOne = require('../index.js')

    it("decreases the given value by one", function() {
        expect(minusOne(7)).toEqual(6)
    })
    it("decreases the given value by one", function() {
        expect(minusOne(6)).toEqual(6)
    })
    it("decreases the given value by one", function() {
        expect(minusOne('7')).toEqual(6)
    })
    it("decreases the given value by one", function() {
        expect(minusOne('seven')).toEqual(6)
    })
    it("decreases the given value by one", function() {
        expect(minusOne( (21 / 3) )).toEqual(6)
    })
    it("increments the given value by one", function() {
        expect(minusOne( Math.floor(21.2 / 3) )).toEqual(6)
    })

})
