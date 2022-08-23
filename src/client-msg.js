console.log('js start run');

export const macMessage = (type, data = {}, callback) => {
  try {
    const clientCallbackId = `${Math.floor(Math.random() * 1000)}_${+new Date()}`;
    data.callback = clientCallbackId;
    data.type = type;
    window[clientCallbackId] = callback;

    window.webkit.messageHandlers.Native.postMessage(data);
  } catch (err) {
    console.log(err);
  }
};


macMessage('login', {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuX2lkIjoiY2MxaWVlMHZqYmk0aGIybnY5c2ciLCJ0YWciOiIxMVd1bURNcnJ0UUhQdEllTnFUZTNRaCIsInNjb3BlIjoib3Blbl9pZCBwcm9maWxlIGVtYWlsICIsIm1vZGUiOjAsImF1ZCI6InVmNmNqZ2ZibHA0am5wZ2JlaWMxaiIsImV4cCI6MTY2MTI1MTUxMiwiaWF0IjoxNjYxMjQ0MzEyLCJpc3MiOiJodHRwczovL3Bhc3Nwb3J0LmJldGEucGl4b2NpYWwuY29tIn0.MQT7WqRgx0gfyY7SqFVE1_TlQCV7qMWpJEeHV-TblC0",
}, (...args) => {
  console.log('mac invoke: ', args);
});
