import { getTaco, getAgua} from './taco'
import { getPerro } from './perro'

getAgua("HORCHATA")
getTaco("Pastor")
getPerro("Pastor alemaan")

console.log("--- Api Request ---")
const url = "https://jsonplaceholder.typicode.com"
const users = document.getElementById("users")

function printUsers (data) {

  console.log(data)
  let print = "<ul>"

  for (const item of data) {
    print += `<li>${item.name}</li>`
  }

  print += "</ul>"
  users.innerHTML = print
}

async function getData () {
  const response = await fetch(`${url}/users`)
  let data = await response.json()
  printUsers(data)
}

getData()
