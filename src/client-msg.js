console.log('js start run');

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

function postMessage(message, callBack) {
  console.log('1.1');
  message.callBack = "(function foo(args) {\n  console.log('call back is invoked' );\n  console.log(args);\n})('hello world')";
  console.log('1.2');
  try {
    window.webkit.messageHandlers.Native.postMessage(message);
  } catch(err) {
    console.log(err);
  }
}


postMessage(person, function (args) {
  console.log('call back is invoked' );
  console.log(args);
});

console.log('js start end');