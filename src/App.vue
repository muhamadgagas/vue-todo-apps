<script setup>
  import AddForm from './components/AddForm.vue';
  import ListTodo from './components/ListTodo.vue';
  import FilterSort from './components/FilterSort.vue';
</script>

<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card" id="list1" style="border-radius: .75rem; background-color: #eff1f2;">
            <div class="card-body py-4 px-4 px-md-5">
              <AddForm v-on:new-task="insertNewTask"/>
              <FilterSort v-on:filter-tasks="filterTasks"/>
              <hr>
              <ListTodo v-bind:filteredTasks="filteredTasks" v-bind:tasks="tasks" v-bind:filter="filter" v-on:complete-task="completeTask" v-on:edit-task="editTask" v-on:delete-task="deleteTask"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {useToast} from 'vue-toast-notification';
  const $toast = useToast();
  export default {
    name: 'App',
    data() {
      return {
        filteredTasks: [],
        filter: 'all',
        sort: false,
        tasks: (localStorage.getItem('tasks') === null) ? [] : JSON.parse(localStorage.getItem('tasks'))
      }
    },
    methods: {
      insertNewTask(task) {
        this.tasks.unshift({
          id: Math.random() * (1 - 999 + 1) ,
          title: task,
          date: new Date().toLocaleString(),
          isCompleted: false
        })
        this.filterTasks(this.filter)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        $toast.info("New Task Added!");
      },
      
      completeTask(index) {
        this.tasks[index].isCompleted = !this.tasks[index].isCompleted
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      },

      deleteTask(index) {
        this.tasks.splice(index, 1)
        this.filterTasks(this.filter)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        $toast.error("Task Deleted!");
      },
      
      editTask(index,newTitle) {
        this.tasks[index].title = newTitle;
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        $toast.warning("Task Updated!");
      },
      filterTasks(filter) {
        this.filter = filter
        if (this.filter !== 'all') {
          this.filteredTasks = this.tasks.filter(function (task) {
            return task.isCompleted === (filter == 'active') ? false : true
          });
        }
      }
    }
  }
</script>
