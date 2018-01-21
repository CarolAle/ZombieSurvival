<template>
	<div class="row">
		<div class="container">
			<h1 class="card-header-title">Zombie Survival</h1>
		</div>
		<div class="container">
			<div class="hero-body">
				<ul>
					<li>
						<router-link to="/">Home</router-link>
						<router-link to="/hello">Hello</router-link>
						<router-link to="/survivo">Survivo</router-link>
					</li>
				</ul>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
