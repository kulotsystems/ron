<template>
    <ion-app>
        <ion-tabs>
            <ion-router-outlet/>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/home">
                    <ion-icon :icon="homeOutline"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="projects" href="/projects">
                    <ion-icon :icon="codeSharp"></ion-icon>
                    <ion-label>Projects</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="contact" href="/contact">
                    <ion-icon :icon="personOutline"></ion-icon>
                    <ion-label>Contact</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-app>
</template>

<script setup lang="ts">
    import {
        IonApp,
        IonRouterOutlet,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonLabel
    } from '@ionic/vue';
    import {
        homeOutline,
        codeSharp,
        personOutline
    } from 'ionicons/icons';
    import { ref } from 'vue';
</script>
