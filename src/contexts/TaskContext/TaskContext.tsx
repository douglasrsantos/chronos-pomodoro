import { createContext } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionModel } from "./taskActions";

type TaskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
}

const initialContextValue = {
    state: initialTaskState,
    dispatch: () => { },
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);