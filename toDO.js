/**
 * Created by Neha on 10/16/16.
 */
(function() {
    var App = {};

    App = {
        /*-----
         Function: Initializes the application
         -----*/
        init: function() {
            var button = document.getElementById('add-task');
            button.addEventListener('click', App.createTask);

            document.onkeydown = function(e) {
                if(e.which == 13) { // if 'enter' is pressed
                    App.createTask(); // add new task
                }
            }
            App.getAllTasks();
        },

        data: [
            {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
            {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
            {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
            {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
            {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
            {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
            {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
        ],

        /*-----
         Function: Gets all tasks
         -----*/
        createTask: function() {
            var name = document.getElementById('task_name'),
                date = document.getElementById('task_date'),
                assigned = document.getElementById('task_assigned');

            if(name.value !== '' && date.value !== '' && assigned.value !== '') { // if the textboxes are not empty
                App.data.push({"name" : name.value, "date" : date.value, "assigned" : assigned.value}); // add new object to data array
                name.value = ''; // clear textbox
                date.value = '';
                assigned.value = '';

                App.getAllTasks(); // refresh the list
            }
        },

        /*-----
         Function: Gets all tasks
         -----*/
        getAllTasks: function() {
            var list = document.getElementById('tasks'); // gets the container element
            list.innerHTML = ''; // resets the list to nothing

            for(var i = 0; i < App.data.length; i++) { // loop through array that contains tasks
                var task = document.createElement('li'); // create element
                task.className = 'task'; // add class
                task.setAttribute('data-id', i); // add data attribute
                task.innerHTML = '<span class="task-name"> ' + App.data[i].name + '</span><span class="task-date"> ' + App.data[i].date + '</span><span class="task-assigned"> ' + App.data[i].assigned + '</span>'; // set contents of <li>

                list.insertBefore(task, list.firstChild); // prepend to the list
            }
        }
    }

    App.init(); // initialize the app
})();