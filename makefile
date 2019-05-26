up:
	docker-compose up -d

down:
	docker-compose down
	docker rmi 'redis'
	docker rmi 'node'
	docker rmi 'api-watson-assistant'

redisdb:
	docker-compose up -d redisdb
