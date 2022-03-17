<template>
  <div class="new-note">
    <div class="split">
      <div class="split__left">
        <label>Title</label>
        <input v-model="note.title" type="text" />
      </div>
      <div class="split__right">
        <label>Priority</label>
        <select v-model="note.priority">
          <option value="">Standard</option>
          <option value="first">First</option>
          <option value="second">Second</option>
        </select>
      </div>
    </div>
    <label>Description</label>
    <textarea v-model="note.description"></textarea>

    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  props: {
    note: { type: Object, required: true },
  },
  name: "NewNote",
  methods: {
    addNote() {
      this.$emit("addNote", this.note);
    },
  },
};
</script>

<style lang="scss" scoped>
.split {
  display: flex;
  justify-content: space-between;

  &__left,
  &__right {
    width: 48%;

    select {
      width: 100%;
      border-radius: 20px;
    }
  }
}

.new-note {
  text-align: center;
}

input,
textarea,
select {
  margin-bottom: 1rem;
}

select {
  padding: 1rem 0;
  text-align: center;
}

button {
  margin: 1rem 0;
}
</style>
