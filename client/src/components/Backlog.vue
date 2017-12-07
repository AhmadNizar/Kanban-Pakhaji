<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading" v-text="task.title"></div>
      <div class="panel-body">
        <p>Point: {{task.point}}</p>
        <p>Assigned To: {{task.assign}}</p>
        <button type="button" class="btn btn-primary" @click="detailBacklog" data-toggle="modal" data-target="#detailModal">Show Detail</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task', 'backlog'],
  methods: {
    detailBacklog () {
      this.$emit('populateModal', {
        populateData: this.task,
        status: 'Back Log',
        taskID: this.backlog
      })
    }
  }
}
</script>

<style>

</style>
