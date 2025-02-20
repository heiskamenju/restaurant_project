<template>
    <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key=item>
                    <v-card>
                        <v-card color="pink">
                            <v-card-item>
                                <v-card-title>{{ item.name}}</v-card-title>

                                <v-card-subtitle> {{ item.description }} </v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="public/Food Menu Template PSD.jpg" cover ></v-img>

                            <v-card-text>
                                price: {{ item.price }}
                                size: {{ item.size }}   
                            </v-card-text>
                        </v-card>
                        <v-card color="#92d42b">
                            <v-card-item>
                            <v-card-title>menu</v-card-title>

                            <v-card-subtitle>This is a card subtitle</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="public/Creamy Cajun Sausage Pasta (One Pot).jpg" cover ></v-img>

                            <v-card-text>
                                price: {{ item.price }}
                                size: {{ item.size }}   
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>

<script setup>    
const menuItems = [
    {
        name: "Chips",
        price: 200,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "lobster",
        price: 2500,
        description: "Best lobster in town",
        size: "None",
        offers: "None",
        image: "https://unsplash.com/photos/sausage-on-black-round-pan-cSxpCQrRlo8"
    },
    {
        name: "prawns",
        price: 3500,
        description: "Best prawns in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "sausage",
        price: 70,
        description: "Best sausage in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "Biryani",
        price: 250,
        description: "Best biryani in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
    {
        name: "burger",
        price: 200,
        description: "Best burger in town",
        size: "Large",
        offers: "None",
        image: "https://unsplash.com/photos/a-basket-of-french-fries-sitting-on-top-of-a-wooden-table-ChXHveqrb28?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
    },
]
</script>
