type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
}

type LoadingTask = {
  state: 'LOADING'
};

type FailedTask = {
  state: 'FAILED',
  error: {
    message: '서버 에러'
  }
};

type SucessTask = {
  state: 'SUCCESS',
  response: {
    data: '서버 에러'
  }
};

type AsyncTask = LoadingTask | FailedTask | SucessTask;

function processResult(task: AsyncTask) {
  switch(task.state) {
    case 'LOADING': {
      console.log('로딩 중...');
      break;
    }
    case 'FAILED': {
      console.log(`에러 발생 : ${task.error?.message}`);
      break;
    }
    case 'SUCCESS': {
      console.log(`성공 : ${task.response?.data}`);
      break;
    }
  }
}

const loading = {
  state: 'LOADING'
}

const failed = {
  state: 'FAILED',
  error: {
    message: '서버 에러'
  }
}

const success = {
  state: 'SUCCESS',
  response: {
    data: '서버 에러'
  }
}