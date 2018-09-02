Vue.component('todo-item', {
    template: '<li>{{ todo.text }}</li>',
    props: ['todo']
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!!!',
        Cena: true,
        todos: [
            { id: 0, text: 'Oonduu'},
            { id: 1, text: 'Oonduuu chellam' },
            { id: 2, text: 'Keshuuu kuttttyy' }
        ]
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
app.message = 'This is a new message';
app.todos.push({text: 'Deepu ma'});
