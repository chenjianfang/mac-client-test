console.log('js start run');

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

function postMessage(message, callBack) {
  message.callBack = callBack.toString();
  window.webkit.messageHandlers.Native.postMessage(message);
}


postMessage(person, function (args) {
  console.log('call back is invoked' );
  console.log(args);
});

console.log('js start end');