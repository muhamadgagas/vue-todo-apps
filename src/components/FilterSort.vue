<template>
  <div class="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
    <p class="small mb-0 me-2 text-muted">Filter</p>
    <div class="row">
      <div class="col">
        <select class="form-control" v-on:change="filterTasks($event)">
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="active">Active</option>
        </select>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilterSort",
    emits: ['filter-tasks'],
    methods: {
      filterTasks(e) {
				this.$emit('filter-tasks', e.target.value)
      }
    }
  }

</script>