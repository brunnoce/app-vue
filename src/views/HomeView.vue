<template>
  <h1>Eventos disponibles</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue"

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 12345,
          category: "animal",
          title: "Adopcion de gatos",
          description: "Adopta un gato en este evento",
          location: "Ciudad gato",
          date: "27 de mayo, 2024",
          time: "12:00",
          petsAllowed: true,
          organizer: "Gatos Piolas",
        },
        {
          id: 78910,
          category: "comida",
          title: "Pruebas de comida",
          description: "Comida muy buena en este evento",
          location: "Ciudad comida",
          date: "29 de mayo, 2024",
          time: "15:00",
          petsAllowed: true,
          organizer: "Comidas Piolas",
        },
        {
          id: 54321,
          category: "sustentabilidad",
          title: "Limpieza de la plaza",
          description: "Cuida el medio ambiente aqui",
          location: "Ciudad reciclaje",
          date: "30 de mayo, 2024",
          time: "17:00",
          petsAllowed: true,
          organizer: "Recicladores Piolas",
        },
      ],
    }
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
