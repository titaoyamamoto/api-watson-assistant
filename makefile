up:
	docker-compose up

down:
	docker-compose down
	docker rmi 'redis'
	docker rmi 'api-watson-assistant'
	docker rmi 'node:alpine'

redisdb:
	docker-compose up -d redisdb