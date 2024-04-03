**To images**
-> docker images
-> docker image ls -a
-> docker rmi <image_name>
-> docker image rm <image_name>

**For Containers**
-> docker ps (For running containers)
-> docker ps -a (For all containers)
-> docker container ls
-> docker container ls -a
-> docker rm <container_name>
-> docker container rm <container_name>




1) For node folder
    ->cd node

    //To create image
    ->docker build -t node:v1 .

    //To create container
    ->docker run -p 8000:8000 node:v1 (Basic command to create container)
    ->docker run -p 8000:8000 --name nodeContainer node:v1 (By default in attach mode with terminal)
    ->docker run -p 8000:8000 -d --name nodeContainer node:v1 (Detach with terminal)
    ->docker run -p 8000:8000 -d --rm --name nodeContainer node:v1 (Detach with terminal and automatically delete container when stops)
    ->docker run -p 8000:8000 -d --rm -it --name nodeContainer node:v1 (For interactive mode)

    //To stop container
    ->docker stop nodeContainer

    //To restart container
    ->docker start nodeContainer (By default in detach mode)
    ->docker start -a nodeContainer (For attach mode)
    ->docker start -a -i nodeContainer (For taking input ** -it will not work here)

    //To remove container
    ->docker rm nodeContainer

    //To remove image 
    ->docker rm node:v1


2) For calci folder
    ->cd calci

    //To create image
    ->docker build -t calci:v1 .

    //To create container
    ->docker run -it calci:v1 (Basic command to create container with interactive terminal)
    ->docker run -it --name calciContainer calci:v1 (Name the container)
    ->docker run -it --rm --name calciContainer calci:v1 (Automatically delete container when stops)

    //To stop container
    ->docker stop calciContainer

    //To restart container
    ->docker start calciContainer (By default in detach mode)
    ->docker start -a calciContainer (For attach mode)
    ->docker start -a -i calciContainer (For taking input ** -it will not work here)

    //To remove container
    ->docker rm calciContainer

    //To remove image 
    ->docker rm calci:v1