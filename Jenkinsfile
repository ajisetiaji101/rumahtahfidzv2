pipeline {
  environment {
    registry = "10.14.152.204/mims/mims-express-api"
    registryCredential = 'HarborUlzaGanteng'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Building Image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry('https://10.14.152.204', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused Image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    stage("Update Service") {
            steps {
                script {
                    withCredentials ([usernamePassword(credentialsId: 'Portainer Server', usernameVariable: 'username', passwordVariable: 'password')]) {
                        def remote = [name:'swarm', host:'10.14.152.192', port: 2289, user: username, password: password, allowAnyHosts: true]

                        sshCommand remote:remote, command: 'docker service update --image 10.14.152.204/mims/mims-express-api:latest mims-express-api'
                    }
                }
            }
        }

  }
}
