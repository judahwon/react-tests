import chalk from 'chalk';
import ora from 'ora';

export default class CustomReporter {
  spinner = ora();

  onTestStart() {
    console.log('\n');
    this.spinner.start();
    console.log(chalk.black.bold('RUNNING TESTS'));
  }

  onTestCaseResult(test, testCase) {
    if (testCase.status === 'failed') {
      console.log(chalk.white.bgRed.bold(' ' + testCase.title + ' '), chalk.red.bold('✖'));
    } else {
      console.log(chalk.white.bgGreen.bold(' ' + testCase.title + ' '), chalk.green.bold('✔'));
    }
  }

  onRunComplete(_, results) {
    this.spinner.stop();

    // like a table
    console.log('');
    console.log(chalk.white.bgGray.bold(' TOTAL '), '|', chalk.white.bgRed.bold(' FAILED '), chalk.white.bgGreen.bold(' PASSED '));
    console.log('--------+------------------');
    console.log(
      results.numTotalTests,
      '      |',
      results.numFailedTests,
      '      ',
      results.numPassedTests
    );
  }
}