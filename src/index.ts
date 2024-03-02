#! /usr/bin/env node
/* eslint-disable no-console */
import { Command } from 'commander'
import inquirer from 'inquirer'
import ora from 'ora'
import pkg from '../package.json'

const program = new Command()
program
  .name(Object.keys(pkg.bin)[0])
  .description(pkg.description)
  .version(pkg.version, '-v --version', '🎈版本信息~')
  .helpOption('-h --help', '❓帮助信息~')
program
  .command('test')
  .argument('<name>')
  .description('🚀创建测试项目~')
  .option('-f --force', '🕹️ 强制覆盖同名目录~')
  .option('-t --template', '选择模板')
  .action(async (name: string, options: any) => {
    console.log(name)
    console.log(options)
    const spinner = ora('Loading unicorns')
    const { value } = await inquirer.prompt({
      name: 'value',
      type: 'list',
      choices: [
        { name: 'ora set start', value: 'start' },
        { name: 'ora set success', value: 'success' },
        { name: 'ora set fail', value: 'fail' },
      ],
      message: '🎯Select a test project !',
    })
    if (value === 'start')
      spinner.start('🦄 Start!')
    if (value === 'success')
      spinner.succeed('🎉 Success!')
    if (value === 'fail')
      spinner.fail('🤡 Fail!')
  })
program.parse(process.argv)
