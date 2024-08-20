import chalk from 'chalk';
import ora from 'ora';

export default class CustomReporter {
  spinner = ora();

  onTestStart() {
    console.log('\n');
    this.spinner.start();
    console.log(chalk.black.bold('RUNNING TESTS'));
  }

  onRunComplete(_, results) {
    this.spinner.stop();

    // like a table
    console.log('');
    console.log(chalk.white.bgGray.bold(' TOTAL '), '|', chalk.white.bgRed.bold(' FAILED '), chalk.white.bgGreen.bold(' PASSED '));
    console.log('--------+------------------');
    console.log(
      chalk.white.bgGray.bold(results.numTotalTests),
      '      |',
      chalk.white.bgRed.bold(results.numFailedTests),
      '      ',
      chalk.white.bgGreen.bold(results.numPassedTests)
    );
  }
}