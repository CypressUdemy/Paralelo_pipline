pipeline {
    agent any
 
    tools {nodejs "Node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/CypressUdemy/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key e0a41c7f-404a-4eb6-951d-54ba07a2dffa  --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/CypressUdemy/Paralelo_pipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key e0a41c7f-404a-4eb6-951d-54ba07a2dffa  --parallel'
                    
                    }
                }

                  
            }
 
             
        }
 
    }
            
}