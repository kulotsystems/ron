<template>
    <ion-page>
        <header1/>

        <ion-content :fullscreen="true">
            <header2/>

            <!-- Contact Content -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <div class="ion-padding-start ion-padding-end">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut doloribus fuga labore libero maxime possimus quam quas totam voluptas!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur eos nesciunt provident recusandae similique tempora temporibus, voluptate? Consectetur, eos!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, deleniti in iure necessitatibus quo soluta.</p>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>


<script setup lang="ts">
    import Header1 from '@/components/headers/Header1.vue';
    import Header2 from '@/components/headers/Header2.vue';
    import {
        IonContent, IonGrid,
        IonPage, IonRow
    } from '@ionic/vue';
</script>


<style scoped>

</style>
