<template>
  <div class="notes">
    <div
      v-for="note in notes"
      :key="note.id"
      class="note"
      :class="[{ full: !grid }, `note--${note.priority}`]"
    >
      <div class="note-header" :class="{ full: !grid }">
        <p>{{ note.title }}</p>
        <p
          class="note-delete-mark"
          style="cursor: pointer"
          @click="removeNote(note.id)"
        >
          X
        </p>
      </div>
      <div class="note-body">
        <p>{{ note.description }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  props: {
    notes: { type: Array, required: true },
    grid: { type: Boolean, required: true },
  },
  methods: {
    removeNote(id) {
      this.$store.dispatch("removeNote", id);
    },
  },
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0;

  .note {
    width: 48%;
    padding: 1.1rem 1.2rem;
    margin-bottom: 1.2rem;
    background: white;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.02);

    &:hover {
      box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.04);
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }

    &--first {
      background: #ff460038;
    }
    &--second {
      background: #ffff614f;
    }

    &.full {
      width: 100%;
      text-align: center;
    }

    .note-header {
      color: dodgerblue;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &.full {
        justify-content: center;
        .note-delete-mark {
          margin-left: 2rem;
        }
      }
    }

    .note-body {
      p {
        margin: 1.2rem 0;
      }
      span {
        font-size: 0.9rem;
        color: #999999;
      }
    }
  }
}
</style>
