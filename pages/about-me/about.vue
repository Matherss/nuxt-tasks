<template>
  <div class="container">
    <div class="wrapper">
    <h1>Frontend-разработчик</h1>
    <p class="info">Опыт программирования 1 год 1 месяц</p>
    <p class="info">Дата рождения: 03.06.1996</p>
    <p class="info">Гражданство: Россия</p>
    <p class="stack">Стек:
        <ul>
            <li>HTML</li>
            <li>CSS(SCSS)</li>
            <li>Адаптивная, респонсивная верстка</li>
            <li>JS
                <ul>
                    <li>React</li>
                    <li>Vue</li>
                </ul>
            </li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>PHP</li>
        </ul>
</p>
</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">

.container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background: rgb(248, 248, 248)
}
.wrapper {
    h1 {
        color: rgb(0, 51, 34);
    }
    .info {
        font-size: 14px;
        font-style: italic;
        color: rgb(0, 75, 50);
    }
    .stack {
        font-size: 16px;
    }
}</style>
