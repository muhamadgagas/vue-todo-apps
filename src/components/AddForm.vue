<template>
  <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
    <i class="pi pi-check-circle me-1"></i>
    Vue 3 Todo-Apps
  </p>

  <div class="pb-2">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-row align-items-center">
          <input type="text" v-model="newTask" v-on:keyup.enter="addNewTask" class="form-control form-control-lg" autocomplete="off" placeholder="Add new...">
          <div>
            <button  type="button" v-on:click="addNewTask" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>

  export default {
    name: 'AddForm',
    emits: ['new-task'],
    data() {
      return {
        newTask: ''
      }
    },
    methods: {
      addNewTask() {
				this.$emit('new-task', this.newTask)
        this.newTask = ''
      }
    }
  }
</script>