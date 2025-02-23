<template>
  <ul v-for="(task, index) in (filter === 'all') ? tasks  : filteredTasks" v-bind:key="index"  class="list-group list-group-horizontal rounded-0 bg-transparent border-bottom border-secondary">
    <li
      class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
      <div class="form-check">
        <input class="form-check-input me-0 border border-secondary" type="checkbox" v-on:click="completeTask(index)" :checked="task.isCompleted ? true: false"/>
      </div>
    </li>
    <li
      class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
      <input type="text" v-bind:value="task.title" v-on:keyup.enter="editTask(index)" v-bind:readonly="indexTaskToEdit === index ? false : true" v-on:blur="indexTaskToEdit = null" v-bind:disabled="indexTaskToEdit === index ? false : true" v-bind:ref="`taskInput${index}`" class="form-control" v-bind:class="{'text-line-through': indexTaskToEdit !== index && task.isCompleted === true}">
    </li>
    <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
      <div class="d-flex flex-row justify-content-end mb-1">
        <small class="text-info" style="cursor:pointer;" v-on:click="enableEditInput(index)"><i
            class="pi pi-pencil me-3"></i></small>
        <small class="text-danger" style="cursor:pointer;" v-on:click="deleteTask(index)"><i
            class="pi pi-trash"></i></small>
      </div>
      <div class="text-end text-muted">
          <small class="small mb-0"><i class="pi pi-info-circle me-2"></i>{{task.date}}</small>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "ListTodo",
		props: ["filteredTasks", 'filter', 'tasks'],
    emits: ['complete-task', 'delete-task', 'edit-task'],
    data() {
      return {
        indexTaskToEdit: null
      }
    },
    methods: {
      completeTask(index) {
				this.$emit('complete-task', index)
      },
      deleteTask(index) {
				this.$emit('delete-task', index)
      },
      enableEditInput(index) {
        this.indexTaskToEdit = index
        this.$nextTick(() => {
          this.$refs[`taskInput${index}`][0].focus()
        })
      },
      editTask(index) {
        this.indexTaskToEdit = null
				this.$emit('edit-task', index, this.$refs[`taskInput${index}`][0].value)
      }
    }
  }
</script>