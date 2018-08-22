	<template>
	<main>
		<h1>这是order页面</h1>
		<p></p>
	</main>

	</template>

	<script>
		import jsonp  from 'jsonp'

		export default{
			mounted(){
				jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-20.html', null, function (err, data) {
		        if (err) {
		       	 console.log(err.message);
		        } else {
		        	console.log(data)
		        	
		        }
		        });
			}
		}

	</script>