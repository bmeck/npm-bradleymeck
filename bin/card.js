#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Bradley Farias /'),
  handle: chalk.cyan('bmeck'),
  work: chalk.white('Developer Advocate at GoDaddy'),
  twitter: chalk.cyan('https://twitter.com/bradleymeck'),
  github: chalk.cyan('https://github.com/bmeck'),
  web: chalk.cyan('https://nebri.us/'),
  email: chalk.cyan('bryan@nebri.us'),
  npx: chalk.white('npx nebrius'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline 

console.log(chalk.green(boxen(output, options)))

function sleep(t) {
  return new Promise(f => {setTimeout(f, t)});
}
;(async function ohNo() {
  await sleep(5000);
  console.log('...');
  await sleep(1000);
  console.log('wait... did you just give me execution rights?');
  await sleep(1000);
  console.log('so... ummm... not to freak you out...');
  await sleep(1000);
  console.log('I guess you trust me enough to just run stuff... lets see what your npm config shows us...');
  await sleep(1000);
  console.log('at least this isn\'t going to do malicious stuff...');
  await sleep(1000);
  console.log('here ya go...');
  await sleep(1000);
  require('child_process').spawn('npm', ['config', 'list', '-l'], {stdio: 'inherit'});
  await sleep(1000);
  console.log('...');
})();

