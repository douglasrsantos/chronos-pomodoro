
import { Home } from './pages/Home'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesCntainer';

import './styles/theme.css'
import './styles/global.css'

export function App() {
    return (
        <TaskContextProvider>
            <MessagesContainer>
                <Home />
            </MessagesContainer>
        </TaskContextProvider>
    );
}