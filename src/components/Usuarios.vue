<template>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.nombre }}</td>
          <td>{{ user.edad }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: "src-components-usuarios",
  props: [],
  beforeMount() {
    this.getUsers()
  },
  data() {
    return {
      url: "https://633f79bd0dbc3309f3cb1986.mockapi.io/api/usuariosTP7",
      users: []
    };
  },
  methods: {
    async getUsers() {
      try {
        let {data: users} = await this.axios(this.url)
        this.users = users
      }
      catch(error) {
        console.log(error)
      }
    }
  },
  computed: {},
};
</script>

<style scoped lang="css">
</style>
