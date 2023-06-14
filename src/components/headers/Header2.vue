<template>
    <ion-header collapse="condense">
        <ion-toolbar>
            <ion-title size="large">{{ route.name }}</ion-title>
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
