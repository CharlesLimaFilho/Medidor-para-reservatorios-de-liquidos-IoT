<!-- Using Option API-->

<script>
export default {
    data() {
        return {
            name : 'John Doe',
            status : 'pending',
            tasks: ['Task One', 'Task Two', 'Task Three'],
            link: 'https://google.com'
        };
    },
    methods: {
        toogleStatus() {
            if (this.status === 'active') {
                this.status = 'pending';
            } else if (this.status === 'pending') {
                this.status = 'inactive';
            } else {
                this.status = 'active';
            }
        },
    },
};
</script>

<template>
    <h1>{{name}}</h1>
    <p v-if="status === 'active'">User is active</p>
    <p v-else-if="status === 'pending'">User is pending</p>
    <p v-else>User is inactive</p>

    <h3>Tasks:</h3>
    <ul>
        <li v-for="task in tasks" :key="task"> {{ task }}</li>
    </ul>

    <!-- The use of ":" means that it is dynamic-->
    <!-- <a v-bind:href="link">Click for Google</a> -->
    
    <a :href="link">Click for Google</a>
    <br />

    <!-- "v-on" can be reduced to "@"-->
    <!-- <button v-on:click="toogleStatus">Change Status</button> -->
    <button @click="toogleStatus">Change Status</button>
</template>
