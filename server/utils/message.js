var generateMessage =(from,text)=>{
  return{
    from,
    text,
    createdAT:new Date().getTime()
  }
}

module.exports = {generateMessage}


