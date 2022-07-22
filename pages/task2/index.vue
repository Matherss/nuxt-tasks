<template>
  <div class="app">
    <h1>To do list</h1>

    <div>
      <input
        v-model="inputValue"
        type="text"
        name="todo"
        placeholder="Напишите задачу.."
      />
      <button @click="pushNewTask" type="button">Добавить задачу</button>
    </div>

    <ul class="app__list">
      <li v-for="(item, i) in tasks" class="task" :key="i">
        <input type="checkbox" name="task" />
        <span>{{ item }}</span>
        <button @click="() => tasks.splice(i, 1)" type="button">
          Удалить задачу
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      tasks: ["Сходить в кино", "Погулять с собакой", "Встретиться с Шерлоком"],
      inputValue: "",
    };
  },
  methods: {
    pushNewTask() {
      this.tasks.push(this.inputValue);
      this.inputValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app {
  padding: 20px;
  width: 500px;
  border: 2px solid red;
  border-radius: 20px;

  &__list {
    margin: 30px 0 0 20px;
    padding: 0;
    list-style: none;
  }
}

.task {
  display: flex;
  align-items: center;
  min-height: 30px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  input:checked {
    ~ span {
      text-decoration: line-through;
    }

    ~ button {
      display: none;
    }
  }

  span {
    margin-right: auto;
  }
}
</style>
