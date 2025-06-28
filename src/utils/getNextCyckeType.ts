import { TaskModel } from "../models/TaskModel";

//FizzBuzz
export function getNextCycleType(currentCycle: number): TaskModel['type'] {
    if (currentCycle % 8 === 0) return 'longBreakTime'; // Pega o resto da divisão
    if (currentCycle % 2 === 0) return 'shortBreakTime';
    return 'workTime';
}