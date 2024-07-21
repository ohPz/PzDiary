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
  | { type: 'removeBoard'; payload: { id: number } };

// for provider's value
interface ContextProps {
  session: Session;
  login: (user: IUser) => void;
  logout: () => void;
  addBoard: (board: IBoard) => void;
  saveBoard: (board: IBoard) => void;
  removeBoard: (id: number) => void;
}

interface Session {
  loginUser: IUser | null;
  boards: IBoard[];
}

const SessionContext = createContext<ContextProps>({
  session: {
    loginUser: { id: 1, email: 'sy@sy.com', password: 'sy' },
    boards: [],
  },
  login: (user: IUser) => {},
  logout: () => {},
  addBoard: (board: IBoard) => {},
  saveBoard: (board: IBoard) => {},
  removeBoard: (id: number) => {},
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
        books: [
          ...session.boards.filter((_board) => _board.id !== payload?.id),
        ],
      };

    case 'addBoard':
      console.table(payload);
      // 완전히 추가되기 전의 session.cart가 spread되므로 1번만 추가된 것 처럼 보임!
      return { ...session, boards: [...session.boards, { ...payload }] };

    case 'saveBoard':
      console.table(payload);
      return {
        ...session,
        boards: session.boards.map((_board) => {
          if (_board.id !== payload.id) return _board;
          return { ...payload };
        }),
      };

    default:
      return session;
  }
};

const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, dispatch] = useReducer(reducer, {
    loginUser: { id: 1, email: 'sy@sy.com', password: 'sy' },
    boards: [],
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
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
