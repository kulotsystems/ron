<template>
    <ion-page>
        <header1/>

        <ion-content :fullscreen="true">
            <header2/>

            <!-- Projects Content -->
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <div class="ion-padding-start ion-padding-end">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolores, error harum magnam maxime minus quibusdam quidem ullam velit voluptas.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus expedita fugiat fugit incidunt laboriosam nesciunt numquam provident recusandae suscipit voluptatibus!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eius fugit qui quod quos sapiente.</p>
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
