
var SingleTone = (function () {
  function Person(name, email) {
    this.name = name;
    this.email = email;
  }
  var localPerson;
  return {
    getInstance: function(singleToneName, singleToneEmail){
      if(!localPerson){
        localPerson = new Person(singleToneName, singleToneEmail)
      }
      return localPerson
    }
  }
})()

export default SingleTone;