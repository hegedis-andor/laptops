pipeline {
  agent any
  stages {
    stage('test') {
      parallel {
        stage('test') {
          steps {
            sh 'npm run test'
          }
        }

        stage('lint') {
          steps {
            sh 'npm run lint'
          }
        }

      }
    }

    stage('buil') {
      steps {
        sh 'ng build --prod'
      }
    }

  }
}
