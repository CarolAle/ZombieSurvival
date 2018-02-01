<template>
	<div class="row">
		<nav class="navbar">
			<div class="container is-fluid">
				<div class="navbar-brand">
					<h1 class="card-header-title">Zombie Survival</h1>
				</div>

				<div class="navbar-menu">
					<div class="navbar-start">
						<a class="navbar-item is-active"><router-link to="/">Home</router-link></a>
						<a class="navbar-item"><router-link to="/register">Register</router-link></a>
						<a class="navbar-item"><router-link to="/survivos">Survivos</router-link></a>
					</div>
				</div>
			</div>
		</nav>
		<router-view></router-view>
	</div>
</template>
