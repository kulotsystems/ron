<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-title>{{ $store.state.socials.github.username }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>


<script setup lang="ts">
    import {
        IonHeader,
        IonToolbar
    } from '@ionic/vue';
</script>


<style scoped>

</style>
