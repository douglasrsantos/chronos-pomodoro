import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycleType } from "../../utils/getNextCyckeType";
import { getNextCycle } from "../../utils/getNextCycle";

export function Tips() {
    const { state } = useTaskContext();
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);
    //Tips
    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime}min</span>,
        shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Descanso longo</span>
    }

    const tipsForNoActiveTask = {
        workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
        shortBreakTime: <span>Próximo descanso é de {state.config.shortBreakTime}min</span>,
        longBreakTime: <span>Próximo descanso será longo</span>
    }

    return (
        <>
            {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
        </>
    )
}