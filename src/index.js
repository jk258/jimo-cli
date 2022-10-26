#!/usr/bin/env node
import { program } from 'commander'
import inquirer from 'inquirer'
import vueTemplate from './vueTemplate.js'

const init = async () => {
	const { framework, lang } = await inquirer.prompt([
		{
			type: 'list',
			message: 'Select a framework:',
			name: 'framework',
			choices: ['vue', 'react'],
		},
		{
			type: 'list',
			message: 'Select a lang:',
			name: 'lang',
			choices: ['ts', 'js'],
		},
	])
	if (framework == 'vue') {
		const { modules } = await inquirer.prompt([
			{
				type: 'checkbox',
				message: 'Select modules:',
				name: 'modules',
				default: ['base', 'router', 'pinia', 'axios'],
				choices: ['base', 'router', 'pinia', 'axios'],
			},
		])
		vueTemplate(lang, modules)
	} else {
	}
}

program.version('1.0.0')
program.command('init').description('init a description')
  .action((name) => {
    // vueTemplate('ts')
    init()
  })
program.parse(process.argv)
