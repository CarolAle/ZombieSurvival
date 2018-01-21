<template>
  <div class="container">
    <div class="col-md-8 col-sm-offset-2">
      <div id="list-users" v-if="users && users.length">
        <div class="panel panel-default" v-for="user of users">
          <div class="panel-heading">
            <span>{{user.name}}</span>
          </div>
            <div class="row">
              <div>Capital: <strong>{{user.age}}</strong></div>
              <div>Region: <strong>{{user.gender}}</strong></div>
            </div> 
        </div>
      </div>
      <div class="text-center" v-else>
        No results!
      </div>
    </div>
  </div>  
</template>

<script>
	import axios from "axios";

	export default {

		name: 'survivor',
		data () {
			return {
				users: []
			}
		},
		mounted() {
			axios({method: "GET", "url": "http://zssn-backend-example.herokuapp.com/api/people"}).then(result => {
				this.users = result.data;
			}, error => {
				console.error(error);
			});
		}

	}
</script>