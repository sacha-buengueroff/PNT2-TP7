<template>
  <div class="jumbotron">
    <h2>Usuarios</h2>
    <hr />
    <hr />
    <br />
    <table class="table table-dark" v-if="users.length != 0">
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
    <div class="alert alert-warning" role="alert" v-else>
      No hay usuarios disponibles
    </div>
  </div>
</template>

<script>
export default {
  name: "src-components-usuarios",
  props: [],
  beforeMount() {
    this.getUsers();
  },
  data() {
    return {
      url: "https://633f79bd0dbc3309f3cb1986.mockapi.io/api/usuariosTP7",
      users: [],
    };
  },
  methods: {
    async getUsers() {
      try {
        let { data: users } = await this.axios(this.url);
        this.users = users;
        console.log(this.users.length);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: teal;
  color: white;
}

hr {
  background-color: #bbb;
}

pre {
  color: white;
}
</style>
