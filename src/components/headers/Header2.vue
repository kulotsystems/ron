<template>
    <ion-header collapse="condense">
        <ion-toolbar>
            <ion-title size="large">{{ $store.state.socials.github.username }}</ion-title>
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
