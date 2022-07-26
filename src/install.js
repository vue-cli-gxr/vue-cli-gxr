import { repoList, tagList, downloadLocal } from './utils/git'
import ora from 'ora'
import inquirer from 'inquirer'
import { version } from 'punycode';
const install = async () => {
    let loading = ora('featching 模版...')
    loading.start()
    let list = await repoList()
    loading.succeed()
    list = list.map( ({ name }) => name)
    let answer = await inquirer.prompt([{
        type: 'list',
        name: 'project',
        choices: list,
        questions: 'please select template'
    }])
    let project = answer.project

    loading = ora('featching tags...')
    loading.start()
    list = await tagList(project)
    loading.succeed()
    list = list.map( ({ name }) => name)
    answer = await inquirer.prompt([{
        type: 'list',
        name: 'tag',
        choices: list,
        questions: 'please choice tag'
    }])
    let tag = answer.tag
    console.log(tag)

    loading = ora('download 项目...')
    loading.start()
    await downloadLocal(project,tag)
    loading.succeed()
}
export default install