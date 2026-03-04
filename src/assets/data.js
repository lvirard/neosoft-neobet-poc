import { Collaborator } from "@/models/Collaborator"

export const collaborators = [new Collaborator(
  'Toto',
  'Dev',
  {
    dev: ['HTML', 'CSS', 'JS'],
    ops: ['gitlab CI'],
  }
), new Collaborator(
  'Titi',
  'Ops',
  {
    dev: ['bash'],
    ops: ['gitlab CI', 'docker', 'ansible', 'k8s'],
  }
), new Collaborator(
  'Tata',
  'Sec',
  {
    dev: ['bash'],
    ops: ['gitlab CI', 'docker', 'ansible', 'k8s'],
    sec: ['pentest', 'red team', 'blue team']
  }

)]