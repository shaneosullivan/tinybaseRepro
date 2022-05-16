const { createStore } = require("tinybase/lib/umd/tinybase")
const store = createStore().setCell('messages', 'greeting', 'hi', 'there!');
 
console.log(store.getTable('messages'));
