import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ReactNode } from 'react';

// Todo: 눈에 보기 쉽게 파일 분리

export default function SeContainer() {
  type Todo = {
    id: number;
    userId: number;
    title: string;
    detail: string;
    completed: number;
  };

  const BoardTitle: string = '대기';

  // SampleData
  const todos: Todo[] = [
    {
      id: 1,
      userId: 1,
      title: 'Task 추가 시 Task Card 추가하기',
      detail:
        '대기 보드 하단에서 + Add Task 클릭 및 데이터 입력하여 Save 버튼을 클릭하면 대기 보드에 Task Card 추가하기',
      completed: 0,
    },
    {
      id: 2,
      userId: 1,
      title: 'Task 수정 시 progress 데이터 불러오기',
      detail:
        '대기 보드에서는 progress가 "Select Progress"가 아니라 "대기"값으로 불러와야 함',
      completed: 0,
    },
    {
      id: 3,
      userId: 1,
      title: '대기 보드 상하스크롤 적용',
      detail:
        '보드 타이틀, Add 버튼은 그대로 있고 Task Card에만 상하스크롤 적용',
      completed: 0,
    },
    {
      id: 4,
      userId: 1,
      title: 'AWS 서버 구성',
      detail: 'EC2 Public IP를 교수님께 전달, pzdiary와 함께 도메인 요청',
      completed: 0,
    },
    {
      id: 5,
      userId: 1,
      title: 'AWS RDS 구성',
      detail: 'EC2와 연결할 DB 위해 교수님 RDS 스키마 요청',
      completed: 0,
    },
    {
      id: 6,
      userId: 1,
      title: '백엔드 연동',
      detail: '화면상으로 메모 추가, 수정, 삭제가 된다면 백엔드 연동 실시',
      completed: 0,
    },
  ];

  function Task({ todo }: { todo: Todo }) {
    return (
      <Card className='mt-2'>
        <CardHeader className='px-3 py-2 flex flex-row justify-between space-y-0'>
          <CardTitle className='flex text-xl items-center'>
            {todo.title}
          </CardTitle>
          <SaveTask todo={todo} />
        </CardHeader>
        <CardContent className='p-4 pt-0'>{todo.detail}</CardContent>
      </Card>
    );
  }

  function Board({
    boardTitle,
    children,
  }: {
    boardTitle: string;
    children: ReactNode;
  }) {
    return (
      <Card className='h-full overflow-y-scroll'>
        <CardHeader className='p-4 space-y-0'>
          <CardTitle>{boardTitle}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
          <SaveTask isCreate={true} />
        </CardFooter>
      </Card>
    );
  }

  function SelectProgress() {
    return (
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select Progress' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select Progress</SelectLabel>
            <SelectItem value='대기'>대기</SelectItem>
            <SelectItem value='진행'>진행</SelectItem>
            <SelectItem value='완료'>완료</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  function SaveTask({
    todo,
    isCreate = false,
  }: {
    todo?: Todo;
    isCreate?: boolean;
  }) {
    let flag: {
      [k: string]: string;
    } = {};

    // create Task일 때
    if (isCreate) {
      flag = {
        type: '+ Add Task',
        description: '',
      };
    } else {
      // update Task일 때
      flag = {
        type: 'Edit',
        description: 'changes to ',
      };
    }
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={isCreate ? 'secondary' : 'default'}
            className={isCreate ? 'w-full' : ''}
            size={isCreate ? 'default' : 'sm'}
          >
            {flag.type}
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>{flag.type}</DialogTitle>
            <DialogDescription>
              Make {flag.description}your Task here. Click save when you are
              done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='title' className='text-right'>
                Title
              </Label>
              {isCreate ? (
                <Input id='title' className='col-span-3' />
              ) : (
                <Input
                  id='title'
                  defaultValue={todo?.title}
                  className='col-span-3'
                />
              )}
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='detail' className='text-right'>
                detail
              </Label>

              {isCreate ? (
                <Input id='detail' className='col-span-3' />
              ) : (
                <Input
                  id='detail'
                  defaultValue={todo?.detail}
                  className='col-span-3'
                />
              )}
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='progress' className='text-right'>
                Progress
              </Label>

              {isCreate ? <SelectProgress /> : <SelectProgress />}
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <Board boardTitle={BoardTitle}>
        {todos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </Board>
    </>
  );
}
