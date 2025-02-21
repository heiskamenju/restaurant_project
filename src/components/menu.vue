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
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>
                                price: {{ item.price }}
                                size: {{ item.size }}   
                            </v-card-text>
                            <v-btn color="pink"> 
                                order <v-icon icon="mdi-cart"></v-icon>   
                            </v-btn>
                        </v-card>
                        <v-card color="#92d42b">
                            <v-card-item>
                            <v-card-title>menu</v-card-title>

                            <v-card-subtitle>This is a card subtitle</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>
                                price: {{ item.price }}
                                size: {{ item.size }}   
                            </v-card-text>
                            <v-btn color="pink" @click="addToOrder(item)">
                                order <v-icon icon="mdi-cart"></v-icon>   
                            </v-btn>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
    <v-container>
        <v-card color="blue" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
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
        image: "/public/chips.jpg"
    },
    {
        name: "lobster",
        price: 2500,
        description: "Best lobster in town",
        size: "None",
        offers: "None",
        image: "/public/Grilled Lobster Tails.jpg"
    },
    {
        name: "prawns",
        price: 3500,
        description: "Best prawns in town",
        size: "Large",
        offers: "None",
        image: "/public/prawns.jpg"
    },
    {
        name: "sausage",
        price: 70,
        description: "Best sausage in town",
        size: "Large",
        offers: "None",
        image: "/public/Sausages.jpg"
    },
    {
        name: "Biryani",
        price: 250,
        description: "Best biryani in town",
        size: "Large",
        offers: "None",
        image: "/public/biriyani rice.jpg"
    },
    {
        name: "burger",
        price: 200,
        description: "Best burger in town",
        size: "Large",
        offers: "None",
        image: "/public/crack burgers.jpg"
    },
]
//manage the current state of the order
var orderItems = []
var totalOrderAmount = 0   

function calculateTotalAmount(price){
   totalOrderAmount += price
    }
function addToOrder(item){
    orderItems.push(item)
    totalOrderAmount += item.price
}
function removeFromOrder(item){
    orderItems = orderItems.filter(orderItem => orderItem !== item)
    totalOrderAmount -= item.price
}

</script>
