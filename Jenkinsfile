pipeline {
    agent any

    tools {
        maven "MAVEN"
        nodejs "NodeJS"
    }

    stages {
        stage('Verify All Software Version') {
            steps {
               
                // To run Maven on a Windows agent, use
                sh "git --version"
                sh "java -version"
                sh "mvn -version"
                sh "docker --version"
                sh "docker-compose --version"
                      
            }
        }

        stage('Build the Eureka Server'){
            steps {
                dir("./backend/eureka-server/eureka-server/"){
                    sh "ls"
                    sh "mvn clean package"
                }
            }
        }

        stage('Build the Login Service App') {
            steps {
                dir("./backend/Login-app-micro-service/Login-app-micro-service/"){
                    sh "ls"
                    sh "mvn clean package"
                }
            }
        }

        stage('Build the Movies Microservice App') {
            steps {
                dir("./backend/movies-micro-service-app/movies-micro-service-app"){
                    sh "ls"
                    sh "mvn clean package"
                }
            }
        }

        stage('Build the Angular Front End') {
            steps {
                dir("./frontend/front-end-app"){
                    sh "ls"
                    sh "npm install"
                    sh "ng build"
                }
            }
        }
        stage('Using Docker-Compose run all container') {
            steps {
                sh "docker-compose down"
                sh "docker-compose up --build -d"
                sh "docker images"
                sh "docker ps"
                }
            }
        }
 
    }

