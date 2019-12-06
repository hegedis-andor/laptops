pipeline {
  agent any
  stages {
    stage('lint') {
      steps {
        sh 'cd laptops-angular'
        sh 'npm run lint'
      }
    }

    stage('test') {
      steps {
        sh 'cd laptops-angular'
        sh 'npm run test'
      }
    }

    stage('build') {
      steps {
        sh 'cd laptops-angular'
        sh 'npm run build'
      }
    }

  }
}