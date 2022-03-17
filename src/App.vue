<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <Message v-if="message" :message="message" />
          <NewNote :note="note" @addNote="addNote" />

          <div class="note-header">
            <h1>{{ title }}</h1>

            <Search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"
            />
            <div class="icons">
              <svg
                :class="{ active: grid }"
                @click="grid = true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <svg
                :class="{ active: !grid }"
                @click="grid = false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>

          <Notes :grid="grid" :notes="notesFilter" @remove="removeNote" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message";
import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";
import Search from "@/components/Search";

export default {
  components: {
    Search,
    Notes,
    NewNote,
    Message,
  },
  data() {
    return {
      title: "Notes App",
      search: "",
      message: null,
      grid: true,
      note: {
        title: "",
        description: "",
        priority: "",
      },
      notes: [
        {
          id: 1,
          title: "First note",
          description: "Description for first note",
          priority: "first",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          id: 2,
          title: "Second note",
          description: "Description for second note",
          priority: "second",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          id: 3,
          title: "Third note",
          description: "Description for third note",
          priority: "",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          id: 4,
          title: "Fourth note",
          description: "Description for fourth note",
          priority: "",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  computed: {
    notesFilter() {
      if (!this.search) return this.notes;

      const search = this.search.trim().toLowerCase();

      return this.notes.filter(
        (note) => note.title.toLowerCase().indexOf(search) !== -1
      );
    },
  },
  methods: {
    addNote() {
      let { title, description, priority } = this.note;

      if (title === "" || description === "") {
        this.message = "Form fields can't be blank!";
        return false;
      }

      this.notes.push({
        id: Date.now(),
        title,
        description,
        priority,
        date: new Date(Date.now()).toLocaleString(),
      });

      this.message = null;
      this.note.title = "";
      this.note.description = "";
      this.note.priority = "";
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
.note-header {
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  svg {
    margin-right: 0.8rem;
    color: #07010e;
    cursor: pointer;

    &.active {
      color: blue;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
