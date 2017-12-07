<template>
  <div id="myModal" class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title">New Task</h4>
      </div>
      <div class="modal-body">
        <div class="form-horizontal">
          <fieldset>
          <div class="form-group">
            <label for="inputEmail" class="col-lg-2 control-label">Title</label>
            <div class="col-lg-10">
              <input class="form-control" placeholder="Task Title" type="text" v-model="taskData.title">
            </div>
          </div>
          <div class="form-group">
            <label for="textArea" class="col-lg-2 control-label">Description</label>
            <div class="col-lg-10">
              <textarea class="form-control" rows="3" v-model="taskData.description"></textarea>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-2 control-label">Point</label>
            <div class="col-lg-10">
              <input class="form-control" value="0" type="text" v-model="taskData.point">
            </div>
          </div>
          <div class="form-group">
            <label for="inputEmail" class="col-lg-2 control-label">Assigned To</label>
            <div class="col-lg-10">
              <input class="form-control" placeholder="Assigned To" type="text" v-model="taskData.assign">
            </div>
          </div>
          </fieldset>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="addNewTask">Save</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import db from '../firebase'

export default {
  data () {
    return {
      taskData: {
        title: '',
        description: '',
        point: '',
        assign: ''
      }
    }
  },
  methods: {
    addNewTask () {
      db.ref(`backlog`).push({
        title: this.taskData.title,
        description: this.taskData.description,
        point: this.taskData.point,
        assign: this.taskData.assign
      })
    }
  }
}
</script>

<style>

</style>
