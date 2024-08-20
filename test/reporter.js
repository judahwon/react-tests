import chalk from 'chalk';
import ora from 'ora';

export default class CustomReporter {
  spinner = ora();

  onRunStart() {
    console.log('\n');
    this.spinner.start();
    console.log(chalk.black.bold('Running Tests...'));
  }

  onTestCaseResult(_, testCase) {
    this.spinner.stop();
    if (testCase.status === 'failed') {
      console.log(chalk.white.bgRed.bold(' ' + testCase.title + ' '), chalk.red.bold('✖'));
    } else {
      console.log(chalk.white.bgGreen.bold(' ' + testCase.title + ' '), chalk.green.bold('✔'));
    }
    this.spinner.start();
  }

  onRunComplete(_, results) {
    this.spinner.stop();
    console.log('');
    console.log(
      chalk.white.bgGray.bold(' TOTAL '),
      '|',
      chalk.white.bgRed.bold(' FAILED '),
      '|',
      chalk.white.bgGreen.bold(' PASSED ')
    );
    console.log('--------+----------+---------');
    console.log(
      results.numTotalTests,
      ' '.repeat(6 - Math.round(results.numTotalTests / 10)) + '|',
      results.numFailedTests,
      ' '.repeat(7 - Math.round(results.numFailedTests / 10)) + '|',
      results.numPassedTests
    );
  }
}