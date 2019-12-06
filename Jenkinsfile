pipeline {
  agent any
  stages {
    stage('test') {
      parallel {
        stage('test') {
          steps {
            sh 'sh "npm run test"'
          }
        }

        stage('lint') {
          steps {
            sh 'sh "npm run lint"'
          }
        }

      }
    }

    stage('buil') {
      steps {
        sh 'sh "ng build --prod"'
      }
    }

  }
}