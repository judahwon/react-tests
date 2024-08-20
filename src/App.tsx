import { useState } from 'react';

import StyledButton from './components/StyledButton';
import List from './components/List';

function App() {
  const [count, setCount] = useState(0);
  const [records, setRecords] = useState<number[]>([]);

  return (
    <main className="flex flex-col items-center py-4">
      <StyledButton onClick={() => setCount(count + 1)}>+1</StyledButton>
      <p className="flex h-20 w-48 items-center justify-center text-2xl">
        Count:
        <div className="ml-4 flex size-10 items-center justify-center rounded-full bg-yellow-400 text-white">
          {count}
        </div>
      </p>
      <StyledButton onClick={() => setCount(count - 1)}>-1</StyledButton>

      <br />
      <StyledButton onClick={() => setRecords([...records, count])}>기록 추가</StyledButton>
      <List records={records} />
    </main>
  );
}

export default App;
