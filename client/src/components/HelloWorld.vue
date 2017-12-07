<template>
  <div>
    <navbar></navbar>
    <timeline></timeline>

    <addtask-modal></addtask-modal>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AddtaskModal from './AddTaskModal'
import Timeline from './Timeline'

export default {
  components: {
    Navbar,
    AddtaskModal,
    Timeline
  }
}
</script>
