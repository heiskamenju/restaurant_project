<template>
    <div class="about">
        <h1>About Us</h1>
        <p>Welcome to our restaurant! We are dedicated to providing you with the best dining experience.</p>
        <p>Our chefs use only the freshest ingredients to create delicious and memorable dishes.</p>
        <p>Thank you for choosing to dine with us. We hope to see you again soon!</p>
        <img src="/public/restaurant.jpg" alt="Restaurant Image" class="restaurant-image">
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style scoped>
.about {
    padding: 20px;
    text-align: center;
}

.about h1 {
    font-size: 2em;
    margin-bottom: 20px;
}

.about p {
    font-size: 1.2em;
    margin-bottom: 10px;
}
.restaurant-image {
    width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 10px;
}
</style>