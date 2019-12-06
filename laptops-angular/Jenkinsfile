pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        sh "npm run test"
      }
    }

    stage('Build') {
      steps {
        sh "ng build --prod"
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy run'
      }
    }

  }
}
