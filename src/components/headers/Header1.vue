<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-title>
                <span class="ion-padding-start">{{ route.name }}</span>
            </ion-title>
        </ion-toolbar>
    </ion-header>
</template>


<script setup lang="ts">
    import {
        IonHeader,
        IonToolbar
    } from '@ionic/vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
</script>


<style scoped>

</style>
