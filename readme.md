## Source code:

- Front end: https://github.com/DaoHuyTuan/menloone-test-fe
- Back end: https://github.com/DaoHuyTuan/menloone-test-be

## Install

`Note: the test is run base on docker, you should make sure have docker in your machine`

### Getting start

##### 1.Clone Backend project (docker compose file store in here)

`git clone https://github.com/DaoHuyTuan/menloone-test-be.git`

##### 2.Run docker compose

`docker-compose up`
Docker compose will create 3 service (FE, BE and database), if not have docker image it will pull from docker hub
After run success go to `localhost:3001` (Front end test run on that port)
