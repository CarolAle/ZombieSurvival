<template>
  <div class="row">
    <input class="input" type="text" v-model="search" placeholder='Search...'/>
  <div class="todo" v-if="usersFilter && usersFilter.length">
    <div class="car" v-for="user of usersFilter">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ user.name }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <p>Age: {{ user.age }}</p>
            <p>{{ user.gender }}</p>
            <!-- <p>{{ user.infected + '?' }}</p>  -->

          </div>
        </div>
        <div class="card-footer">
          <router-link class="card-footer-item" to="#">info</router-link></a>
          <router-link class="card-footer-item" to="#">inventory</router-link></a>
          <router-link class="card-footer-item" to="#">olaa</router-link></a>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center" v-else>
        No results!
      </div>
  </div>
  
</template>

<script>


	import axios from "axios";

	export default {

		name: 'survivor',
		data () {
			return {
        search: "",
				users: []
			}
		},
    computed: {
      usersFilter: function() {
        var search = this.search;
        return this.users.filter(function(el) {
          return el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
      }
    },
		created() {
			axios({method: "GET", "url": "http://zssn-backend-example.herokuapp.com/api/people"}).then(result => {
				this.users = result.data;
			}, error => {
				console.error(error);
			});
		}
	}
</script>