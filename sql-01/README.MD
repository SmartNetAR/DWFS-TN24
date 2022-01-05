# MySQL
docker run -p 3306:3306 --name db_server -e MYSQL_ROOT_PASSWORD=secret -d mysql:8.0.1
# MariaDB
docker run -p 3306:3306 --name db_server -e MYSQL_ROOT_PASSWORD=secret -d mariadb:10.5.8

docker run --name myadmin -d --link db_server:db -p 8080:80 phpmyadmin

```bash
docker exec -it db_server bash
$ mysql -uroot -p
$ secret
```


```bash
docker exec -it db_server mysql -uroot -p
$ secret
```