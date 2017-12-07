<template>
  <div class="container-fluid">
    <div class="col-md-12">
      <div class="col-md-3">
        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title">Backlog</h3>
          </div>
          <div class="panel-body">
            <backlog v-on:populateModal="populateDetailModal" v-for="(task, index) in backLog" :key="index" :task="task" :backlog="index"></backlog>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title">To-Do</h3>
          </div>
          <div class="panel-body">
            <todo v-on:populateModal="populateDetailModal" v-for="(task, index) in todo" :key="index" :task="task" :todo="index"></todo>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Doing</h3>
          </div>
          <div class="panel-body">
            <doing v-on:populateModal="populateDetailModal" v-for="(task, index) in doing" :key="index" :task="task" :doing="index"></doing>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">Done</h3>
          </div>
          <div class="panel-body">
            <done v-on:populateModal="populateDetailModal" v-for="(task, index) in done" :key="index" :task="task" :done="index"></done>
          </div>
        </div>
      </div>
    </div>
    <detailmodal :detailModal="populateBacklog"></detailmodal> 
  </div>
</template>

<script>
import db from '../firebase'
import Backlog from './Backlog'
import Todo from './Todo'
import Doing from './Doing'
import Done from './Done'
import Detailmodal from './DetailModal'

export default {
  components: {
    Backlog,
    Todo,
    Doing,
    Done,
    Detailmodal
  },
  data () {
    return {
      backLog: [],
      todo: [],
      doing: [],
      done: [],
      populateBacklog: {}
    }
  },
  methods: {
    populateDetailModal (params) {
      this.populateBacklog = params
    }
  },
  mounted () {
    db.ref(`backlog`).on('value', (res) => {
      this.backLog = res.val()
    })

    db.ref(`todo`).on('value', (res) => {
      this.todo = res.val()
    })

    db.ref(`doing`).on('value', (res) => {
      this.doing = res.val()
    })

    db.ref(`done`).on('value', (res) => {
      this.done = res.val()
    })
  }
}
</script>
