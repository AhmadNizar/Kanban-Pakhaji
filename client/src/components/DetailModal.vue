<template>
    <div id="detailModal" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Detail Task: {{detailModal.populateData.title}} for {{detailModal.populateData.assign}}</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <h5>Task Description :</h5>
              <p>{{detailModal.populateData.description}}</p>
              <br/>
              <h5>Point :</h5>
              <p>{{detailModal.populateData.point}}</p>
              <br/>
              <h5>Status :</h5>
              <p>{{detailModal.status}}</p>
              <br/>
            </div>
          </div>
          <div class="modal-footer">
            <button v-if="detailModal.status === 'Back Log'" type="button" class="btn btn-danger" @click="deleteBackLog" data-dismiss="modal">Delete</button>
            <button v-if="detailModal.status === 'Back Log'" type="button" class="btn btn-success" @click="addTodo" data-dismiss="modal">To do</button>
            <button v-if="detailModal.status === 'To Do'" type="button" class="btn btn-warning" @click="addBackLog" data-dismiss="modal">Back Log</button>
            <button v-if="detailModal.status === 'To Do'" type="button" class="btn btn-danger" @click="deleteTodo" data-dismiss="modal">Delete</button>
            <button v-if="detailModal.status === 'To Do'" type="button" class="btn btn-success" @click="addDoing" data-dismiss="modal">Doing</button>
            <button v-if="detailModal.status === 'Doing'" type="button" class="btn btn-warning" @click="addTodo1" data-dismiss="modal">Todo</button>
            <button v-if="detailModal.status === 'Doing'" type="button" class="btn btn-danger" @click="deleteDoing" data-dismiss="modal">Delete</button>
            <button v-if="detailModal.status === 'Doing'" type="button" class="btn btn-success" @click="addDone" data-dismiss="modal">Done</button>
            <button v-if="detailModal.status === 'Done'" type="button" class="btn btn-warning" @click="addDoing1" data-dismiss="modal">Doing</button>
            <button v-if="detailModal.status === 'Done'" type="button" class="btn btn-danger" @click="deleteDone" data-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import db from '../firebase'

export default {
  props: ['detailModal'],
  methods: {
    deleteBackLog () {
      db.ref(`backlog/${this.detailModal.taskID}`).remove()
    },
    addTodo () {
      db.ref(`todo`).push({
        title: this.detailModal.populateData.title,
        description: this.detailModal.populateData.description,
        point: this.detailModal.populateData.point,
        assign: this.detailModal.populateData.assign
      })
      this.deleteBackLog()
    },
    deleteTodo () {
      db.ref(`todo/${this.detailModal.taskID}`).remove()
    },
    addBackLog () {
      db.ref(`backlog`).push({
        title: this.detailModal.populateData.title,
        description: this.detailModal.populateData.description,
        point: this.detailModal.populateData.point,
        assign: this.detailModal.populateData.assign
      })
      this.deleteTodo()
    },
    addDoing () {
      db.ref(`doing`).push({
        title: this.detailModal.populateData.title,
        description: this.detailModal.populateData.description,
        point: this.detailModal.populateData.point,
        assign: this.detailModal.populateData.assign
      })
      this.deleteTodo()
    },
    deleteDoing () {
      db.ref(`doing/${this.detailModal.taskID}`).remove()
    },
    addTodo1 () {
      db.ref(`todo`).push({
        title: this.detailModal.populateData.title,
        description: this.detailModal.populateData.description,
        point: this.detailModal.populateData.point,
        assign: this.detailModal.populateData.assign
      })
      this.deleteDoing()
    },
    addDone () {
      db.ref(`done`).push({
        title: this.detailModal.populateData.title,
        description: this.detailModal.populateData.description,
        point: this.detailModal.populateData.point,
        assign: this.detailModal.populateData.assign
      })
      this.deleteDoing()
    },
    deleteDone () {
      db.ref(`done/${this.detailModal.taskID}`).remove()
    },
    addDoing1 () {
      db.ref(`doing`).push({
        title: this.detailModal.populateData.title,
        description: this.detailModal.populateData.description,
        point: this.detailModal.populateData.point,
        assign: this.detailModal.populateData.assign
      })
      this.deleteDone()
    }
  }
}
</script>

<style>

</style>
