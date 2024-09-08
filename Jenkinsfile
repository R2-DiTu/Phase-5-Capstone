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
                bat "git --version"
                bat "java -version"
                bat "mvn -version"
                bat "docker --version"
                bat "docker-compose --version"
                      
            }
        }

        stage('Build the Eureka Server'){
            steps {
                dir("./backend/eureka-server/eureka-server/"){
                    bat "dir"
                    bat "mvn clean package"
                }
            }
        }

        stage('Build the Login Service App') {
            steps {
                dir("./backend/Login-app-micro-service/Login-app-micro-service/"){
                    bat "dir"
                    bat "mvn clean package"
                }
            }
        }

        stage('Build the Movies Microservice App') {
            steps {
                dir("./backend/movies-micro-service-app/movies-micro-service-app"){
                    bat "dir"
                    bat "mvn clean package"
                }
            }
        }

        stage('Build the Angular Front End') {
            steps {
                dir("./frontend/front-end-app"){
                    bat "dir"
                    bat "npm install"
                    bat "ng build"
                }
            }
        }
    }
}
