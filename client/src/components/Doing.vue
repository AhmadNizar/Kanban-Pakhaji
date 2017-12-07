<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading" v-text="task.title"></div>
      <div class="panel-body">
        <p>Point: {{task.point}}</p>
        <p>Assigned To: {{task.assign}}</p>
        <button type="button" class="btn btn-primary" @click="detailTodo" data-toggle="modal" data-target="#detailModal">Show Detail</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['task', 'doing'],
  methods: {
    detailTodo () {
      this.$emit('populateModal', {
        populateData: this.task,
        status: 'Doing',
        taskID: this.doing
      })
    }
  }
}
</script>
