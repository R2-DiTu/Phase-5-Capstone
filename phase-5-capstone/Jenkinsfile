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
    }
}
