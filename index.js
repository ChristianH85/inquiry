
const chalk =require('chalk')
const inquirer =require('inquirer')


let pizzaPlaces=['Via313', 'Spartan', 'Hoboken','Homeslice']
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
        type:'rawlist',
        message:'Who makes the best pizza in Austin',
        choices: pizzaPlaces,
        name:'place'
    },
    {
        type:'checkbox',
        message:'What is an acceptable pizza topping',
        choices:['pepperoni', 'cheese', 'pineapple','olives','bacon'],
        name:'toppings'
    }
  ])
  .then((response) =>{
    console.log(chalk.yellow('Your username is: '),chalk.blue(response.username))
    console.log(chalk.yellow('Your name is: '),chalk.green(response.name))
    console.log(chalk.yellow('Your Favorite Pizza shop is: '),chalk.bgCyan(response.place))
    response.toppings.includes('pineapple')?
    console.log(chalk.bgRed('You are a monster')):
    console.log(chalk.underline.bgYellow('I knew you were ok'))
   
    }
  );
