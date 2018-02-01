<template>
  <div class="row">
  	<div class="field">
  		<label class="label">Name</label>
  		<div class="control">
  			<input class="input" type="text" v-model="user.name"/>
  		</div>
  	</div>
  	<div class="field">
  		<label class="label">Age</label>
  		<div class="control">
  			<input class="input" type="text" v-model="user.age"/>
  		</div>
  	</div>
  	<div class="field">
  		<label class="label">Gender</label>
  		<div class="control">
  			<input class="input" type="text" v-model="user.gender"/>
  		</div>
  	</div>
  	<div class="field">
  		<label class="label">Inventory</label>
  		<div class="control">
  			<input class="input" type="text"/>
  		</div>
  	</div>
  	<div class="field">
  		<label class="label">Lonlat</label>
  		<div class="control">
  			<input class="input" type="text" v-model="user.lonlat"/>
  		</div>
  	</div>
  <button class="button is-primary" type="submit" @click="survivor">enviar</button>
  </div>
  
</template>

<script>
	import axios from "axios";

	export default {

		data() {
			return {
				user: {
				name: '',
				age: '',
				gender: '',
				lonlat: ''
			}
			}
			
		},
		methods: {
			survivor() {
			axios.post( 'http://zssn-backend-example.herokuapp.com/api/people', this.user).then(result => {
				console.log(response);
			}, error => {
				console.error(error);
			});
			console.log(this.user);
		}
		}
		
	}
</script>

