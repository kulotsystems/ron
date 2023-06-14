<template>
    <ion-page>
        <header1/>

        <ion-content :fullscreen="true">
            <header2/>

            <!-- Home Content -->
            <ion-grid>
                <ion-row>
                    <ion-col size-xs="12" size-sm="12" size-md="12" size-lg="3" style="width: 100%;">
                        <div class="ion-text-center ion-padding-top">
                            <img
                                :src="`https://avatars.githubusercontent.com/${$store.state.socials.github.username}`"
                                style="width: 196px; height: 196px; border-radius: 50%"
                            />
                        </div>
                    </ion-col>
                    <ion-col size-xs="12" size-sm="12" size-lg="9">
                        <div class="ion-padding-start ion-padding-end">
                            <h1 class="ion-text-center">Hello World!<br>I am <b>Ron Hedwig</b></h1>
                            <p class="ion-text-justify">
                                I'm thrilled to have the opportunity to
                                showcase my work and passion for coding. As a self-taught developer, I
                                have always been devoted to pursuing and mastering the art of coding, driven
                                by my unwavering passion and motivation to succeed. Whether it's building websites,
                                creating innovative applications, or solving complex programming challenges,
                                coding is my true calling. Through this website, I aim to give you a glimpse
                                into my journey and the projects that have helped shape me into the developer
                                I am today. So, sit back, relax, and get ready to discover the exciting world of
                                coding through my eyes!
                            </p>
                            <br/>
                            <div style="display: flex; justify-content: center; align-items: center">
                                <ion-buttons>
                                    <ion-button
                                        class="ion-margin-end"
                                        @click="goToURL(`https://github.com/${$store.state.socials.github.username}`)"
                                    >
                                        <ion-icon :icon="logoGithub" slot="start"/>
                                    </ion-button>
                                    <ion-button
                                        @click="goToURL(`https://twitter.com/${$store.state.socials.twitter.username}`)"
                                    >
                                        <ion-icon :icon="logoTwitter" slot="start"/>
                                    </ion-button>
                                    <ion-button
                                        class="ion-margin-start"
                                        @click="goToURL(`https://web.facebook.com/${$store.state.socials.facebook.username}`)"
                                    >
                                        <ion-icon :icon="logoFacebook" slot="start"/>
                                    </ion-button>
                                </ion-buttons>
                            </div>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>


<script setup lang="ts">
    import {
        IonContent,
        IonPage,
        IonGrid,
        IonRow,
        IonButtons,
        IonButton,
        IonIcon
    } from '@ionic/vue';
    import {
        logoGithub,
        logoTwitter,
        logoFacebook
    } from 'ionicons/icons';
    import Header1 from '@/components/headers/Header1.vue';
    import Header2 from '@/components/headers/Header2.vue';

    const goToURL = (url: string) => {
        window.open(url, '_blank');
    };
</script>


<style scoped>
    p {
        line-height: 1.5;
    }
</style>
