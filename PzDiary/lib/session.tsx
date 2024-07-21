'use client';

import {
  useContext,
  createContext,
  useCallback,
  useReducer,
  ReactNode,
  useEffect,
} from 'react';
import { IUser, IBoard, ITodo } from '@/lib/types';

// import { auth } from './auth';

type Action =
  | { type: 'login'; payload: IUser }
  | { type: 'logout'; payload: {} }
  | { type: 'addBoard'; payload: IBoard }
  | { type: 'saveBoard'; payload: IBoard }
  | { type: 'removeBoard'; payload: { id: number } }
  | { type: 'addTodo'; payload: ITodo }
  | { type: 'saveTodo'; payload: ITodo }
  | { type: 'removeTodo'; payload: { id: number } };

// for provider's value
interface ContextProps {
  session: Session;
  login: (user: IUser) => void;
  logout: () => void;
  addBoard: (board: IBoard) => void;
  saveBoard: (board: IBoard) => void;
  removeBoard: (id: number) => void;
  addTodo: (todo: ITodo) => void;
  saveTodo: (todo: ITodo) => void;
  removeTodo: (id: number) => void;
}

interface Session {
  loginUser: IUser | null;
  boards: IBoard[];
  todos: ITodo[];
}

const SessionContext = createContext<ContextProps>({
  session: {
    loginUser: null,
    boards: [],
    todos: [],
  },
  login: (user: IUser) => {},
  logout: () => {},
  addBoard: (board: IBoard) => {},
  saveBoard: (board: IBoard) => {},
  removeBoard: (id: number) => {},
  addTodo: (todo: ITodo) => {},
  saveTodo: (todo: ITodo) => {},
  removeTodo: (id: number) => {},
});

const reducer = (session: Session, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'logout':
      return { ...session, loginUser: null };

    case 'login':
      return { ...session, loginUser: { ...payload } };

    case 'removeBoard':
      return {
        ...session,
        boards: [
          ...session.boards.filter((_board) => _board.id !== payload?.id),
        ],
      };

    case 'addBoard':
      return { ...session, boards: [...session.boards, { ...payload }] };

    case 'saveBoard':
      return {
        ...session,
        boards: session.boards.map((_board) => {
          if (_board.id !== payload.id) return _board;
          return { ...payload };
        }),
      };

    case 'removeTodo':
      return {
        ...session,
        todos: [...session.todos.filter((_todo) => _todo.id !== payload?.id)],
      };

    case 'addTodo':
      return { ...session, todos: [...session.todos, { ...payload }] };

    case 'saveTodo':
      return {
        ...session,
        todos: session.todos.map((_todo) => {
          if (_todo.id !== payload.id) return _todo;
          return { ...payload };
        }),
      };

    default:
      return session;
  }
};

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, dispatch] = useReducer(reducer, {
    loginUser: null,
    boards: [],
    todos: [],
  });

  const logout = useCallback(
    () => dispatch({ type: 'logout', payload: {} }),
    []
  );

  const login = useCallback((user: IUser) => {
    dispatch({ type: 'login', payload: user });
  }, []);

  const removeBoard = useCallback((id: number) => {
    dispatch({ type: 'removeBoard', payload: { id } });
  }, []);

  const addBoard = useCallback((board: IBoard) => {
    dispatch({ type: 'addBoard', payload: board });
  }, []);

  const saveBoard = useCallback((board: IBoard) => {
    dispatch({ type: 'saveBoard', payload: board });
  }, []);

  const removeTodo = useCallback((id: number) => {
    dispatch({ type: 'removeTodo', payload: { id } });
  }, []);

  const addTodo = useCallback((todo: ITodo) => {
    dispatch({ type: 'addTodo', payload: todo });
  }, []);

  const saveTodo = useCallback((todo: ITodo) => {
    dispatch({ type: 'saveTodo', payload: todo });
  }, []);

  useEffect(() => {
    // (async function () {
    //   const authSession = await auth();
    //   console.log('🚀 SessionContext - authSession:', authSession, new Date());
    // })();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        removeBoard,
        saveBoard,
        addBoard,
        removeTodo,
        saveTodo,
        addTodo,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
