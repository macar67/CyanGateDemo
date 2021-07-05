<template>

  <div class="card m-2" style=" width:18em; background-color:lightgray;">
    <img v-bind:src="users.avatar" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" >{{users.first_name}} {{users.last_name}}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" ><b>Personel No:</b>{{users.id}}</li>
      <li class="list-group-item"><b>Email Address:</b> {{users.email}}</li>
    </ul>
  </div>

</template>
<script>
export default  {
  name: 'Card',
  props:['users']

}
</script>
