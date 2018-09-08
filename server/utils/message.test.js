var expect = require("expect")

var {generateMessage}=require("./message")

describe("generateMessage",()=>{
  it("should generate correct message result",()=>{
    var from = "jen"
    var text = "some message"
    var message = generateMessage(from,text)

    expect(message.createdAT).toBeA("number")
    expect(message).toInclude({from,text})
  })
})
